// @flow
import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

type Props = {
};

type State = {
};

export default class SettingsScreen extends React.Component<Props, State> {
  state = {
  };

  async componentDidMount() {
  }

  render() {
    return (
      <ScrollView contentInset={{ bottom: 100 }}>
        <Text>Settings</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
