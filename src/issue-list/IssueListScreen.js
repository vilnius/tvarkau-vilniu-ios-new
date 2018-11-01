// @flow
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { listIssues } from '../api/legacyApi';
import IssueCard from './IssueCard/IssueCard';
import type { Issue } from '../api/model';

const styles = StyleSheet.create({
  issueListContainer: {
    width: '100%',
  },
  listSeparator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

type State = {
  page: number,
  loading: boolean,
  refreshing: boolean,
  issues?: Issue[],
};

export default class IssueListScreen extends React.Component<*, State> {
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

  // eslint-disable-next-line react/no-unused-prop-types
  renderItem = ({ item }: { item: Issue }) => (
    <IssueCard
      headline={item.category}
      description={item.description}
      thumbnailUri={item.thumbnail}
      status={item.status}
    />
  );

  extractKey = (item: Issue): string => String(item.id);

  separator = () => (
    <View style={styles.listSeparator} />
  );

  render() {
    const { issues, refreshing } = this.state;

    return (
      <View style={styles.issueListContainer}>
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
