// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  id: number,
};

// eslint-disable-next-line react/prefer-stateless-function
export default class IssueViewScreen extends React.Component<Props> {
  render() {
    const { id } = this.props;
    return (
      <View style={styles.issueViewContainer}>
        <Text>Pranešimas {id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  issueViewContainer: {},
});
