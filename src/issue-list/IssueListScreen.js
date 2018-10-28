// @flow
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { listIssues } from '../api/legacyApi';
import type { APIIssue } from '../api/types';
import IssueCard from './IssueCard/IssueCard';

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
  loading: boolean,
  refreshing: boolean,
  issues?: APIIssue[],
};

export default class IssueListScreen extends React.Component<*, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: false,
    refreshing: false,
    issues: [],
  };

  async componentDidMount() {
    await this.loadIssues();
  }

  loadIssues = async () => {
    await this.setStateAsync({ loading: true });
    const issues = await listIssues();
    return this.setStateAsync({ issues, loading: false });
  };

  refreshIssues = async () => {
    await this.setStateAsync({ refreshing: true });
    const issues = await listIssues();
    return this.setStateAsync({ issues, refreshing: false });
  };

  // $FlowFixMe
  setStateAsync = (state: any) => new Promise((resolve) => {
    this.setState(state, resolve);
  });

  // eslint-disable-next-line react/no-unused-prop-types
  renderItem = ({ item }: { item: APIIssue }) => (
    <IssueCard
      headline={item.type_name}
      description={item.description}
      thumbnailUri={item.thumbnail}
      status={item.status}
    />
  );

  extractKey = (item: APIIssue): string => String(item.problem_id);

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
            this.refreshIssues();
          }}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
