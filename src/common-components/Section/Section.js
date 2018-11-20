// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.Node,
};

export default class Section extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7cc',
  },
});
