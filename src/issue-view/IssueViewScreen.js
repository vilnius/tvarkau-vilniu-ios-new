// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  id: number,
};

const styles = StyleSheet.create({
  issueViewContainer: {},
});

const IssueViewScreen = ({ id }: Props) => (
  <View style={styles.issueViewContainer}>
    <Text>Pranešimas {id}</Text>
  </View>
);

export default IssueViewScreen;
