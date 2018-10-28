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
  issues?: APIIssue[],
};

export default class IssueListScreen extends React.Component<*, State> {
  state = {
    issues: [],
  };

  async componentDidMount() {
    const issues = await listIssues();
    this.setState({ issues });
  }

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
    const { issues } = this.state;

    return (
      <View style={styles.issueListContainer}>
        <FlatList
          data={issues}
          renderItem={this.renderItem}
          keyExtractor={this.extractKey}
          ItemSeparatorComponent={this.separator}
        />
      </View>
    );
  }
}
