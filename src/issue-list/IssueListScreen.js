// @flow
import * as React from 'react';
import {
  FlatList, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { listIssues } from '../api/legacyApi';
import IssueCard from './IssueCard';
import type { Issue } from '../api/model';

type Props = {
  navigator: any,
};

type State = {
  page: number,
  loading: boolean,
  refreshing: boolean,
  issues?: Issue[],
};

export default class IssueListScreen extends React.Component<Props, State> {
  state = {
    page: 1,
    // eslint-disable-next-line react/no-unused-state
    loading: false,
    refreshing: false,
    issues: [],
  };

  async componentDidMount() {
    await this.initialFetch();
  }

  initialFetch = async () => {
    await this.setStateAsync({ loading: true });
    const issues = await listIssues();
    return this.setStateAsync({ issues, loading: false });
  };

  fetchMore = async () => {
    const { page } = this.state;
    const nextPage = page + 1;
    const issues = await listIssues({ page: nextPage });
    this.setState(prevState => ({
      page: nextPage,
      issues: [].concat(prevState.issues || [], issues),
    }));
  };

  refresh = async () => {
    await this.setStateAsync({ refreshing: true });
    const issues = await listIssues();
    return this.setStateAsync({ issues, refreshing: false });
  };

  // $FlowFixMe
  setStateAsync = (state: any) => new Promise((resolve) => {
    this.setState(state, resolve);
  });

  goToIssue = (issue: Issue): void => {
    const { navigator } = this.props;
    // eslint-disable-next-line global-require
    const IssueViewScreen = require('../issue-view/IssueViewScreen').default;
    navigator.push({
      component: IssueViewScreen,
      title: issue.documentId,
      passProps: { id: issue.id },
    });
  };

  // eslint-disable-next-line react/no-unused-prop-types
  renderItem = ({ item }: { item: Issue }) => (
    <TouchableHighlight onPress={() => this.goToIssue(item)}>
      <IssueCard
        headline={item.category}
        description={item.description}
        thumbnailUri={item.thumbnail}
        status={item.status}
      />
    </TouchableHighlight>
  );

  extractKey = (item: Issue): string => String(item.id);

  separator = () => (
    <View style={styles.listSeparator} />
  );

  render() {
    const { issues, refreshing } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={issues}
          renderItem={this.renderItem}
          keyExtractor={this.extractKey}
          ItemSeparatorComponent={this.separator}
          onRefresh={() => {
            this.refresh();
          }}
          onEndReached={() => {
            this.fetchMore();
          }}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listSeparator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});
