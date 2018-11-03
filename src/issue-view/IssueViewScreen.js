// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Issue } from '../api/model';
import { getIssue } from '../api/legacyApi';

type Props = {
  id: number,
};

type State = {
  loading: boolean,
  issue?: Issue,
};

export default class IssueViewScreen extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: true,
    issue: undefined,
  };

  async componentDidMount() {
    await this.initialFetch();
  }

  initialFetch = async () => {
    const { id } = this.props;
    await this.setStateAsync({ loading: true });
    const issue = await getIssue(id);
    return this.setStateAsync({ issue, loading: false });
  };

  // $FlowFixMe
  setStateAsync = (state: any) => new Promise((resolve) => {
    this.setState(state, resolve);
  });

  render() {
    const { issue } = this.state;
    if (!issue) {
      return <View />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.category}>{issue.category}</Text>
        {issue.location && issue.location.address && (
          <Text style={styles.address}>{issue.location.address}</Text>
        )}
        <Text style={styles.reportLabel}>Pranešimas</Text>
        <Text style={styles.description}>{issue.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    fontSize: 20,
    marginBottom: 20,
  },
  address: {
    marginBottom: 20,
  },
  reportLabel: {
    marginBottom: 20,
  },
  description: {
    marginBottom: 20,
  },
});
