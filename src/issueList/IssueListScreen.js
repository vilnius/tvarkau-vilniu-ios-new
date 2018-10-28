// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { listIssues } from '../api/legacyApi';
import type { APIIssue } from '../api/types';
import IssueCard from './IssueCard/IssueCard';

const styles = StyleSheet.create({
  issueListContainer: {
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

  render() {
    const { issues } = this.state;

    return (
      <View style={styles.issueListContainer}>
        {(issues || []).map(issue => (
          <IssueCard
            headline={issue.type_name}
            description={issue.description}
            thumbnailUri={issue.thumbnail}
            style={{ borderBottomWidth: '1', borderBottomColor: '#ddd' }}
          />
        ))}
      </View>
    );
  }
}
