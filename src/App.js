// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { listIssues } from './api/legacyApi';
import type { APIIssue } from './api/types';
import IssueCard from './issueList/IssueCard/IssueCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type State = {
  issues?: APIIssue[],
};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<*, State> {
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
      <View style={styles.container}>
        {(issues || []).map(issue => (
          <IssueCard
            headline={issue.type_name}
            description={issue.description}
            thumbnailUri={issue.thumbnail}
            style={{ borderBottomWidth: '1', borderBottomColor: '#ddd' }}
          />
        ))}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
