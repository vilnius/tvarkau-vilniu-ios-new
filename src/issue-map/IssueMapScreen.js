// @flow
import * as React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import type { Issue } from '../api/model';
import { listIssues } from '../api/legacyApi';

type Props = {
};

type State = {
  loading: boolean,
  issues?: Issue[],
};

export default class IssueMapScreen extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: false,
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

  // $FlowFixMe
  setStateAsync = (state: any) => new Promise((resolve) => {
    this.setState(state, resolve);
  });

  render() {
    const { issues } = this.state;
    if (!issues) {
      return <View />;
    }
    return (
      <ScrollView contentInset={{ bottom: 100 }}>
        <Text>This shall be a map</Text>
      </ScrollView>
    );
  }
}
