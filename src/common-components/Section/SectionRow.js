// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  left: string,
  right: string,
};

export default class SectionRow extends React.PureComponent<Props> {
  render() {
    const { left, right } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.leftText}>{left}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.rightText}>{right}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    height: 45,
  },
  right: {
    marginRight: 10,
  },
  leftText: {
    fontSize: 17,
  },
  rightText: {
    color: '#b3b3b3',
    fontSize: 17,
  },
});
