// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import IssueListScreen from './issue-list/IssueListScreen';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#f9f9f9',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<*> {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.appBar} />
        <IssueListScreen />
      </View>
    );
  }
}
