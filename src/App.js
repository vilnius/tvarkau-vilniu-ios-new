// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import IssueListScreen from './issueList/IssueListScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<*> {
  render() {
    return (
      <View style={styles.container}>
        <IssueListScreen />
      </View>
    );
  }
}
