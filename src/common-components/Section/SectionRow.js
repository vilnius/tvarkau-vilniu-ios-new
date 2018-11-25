// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../AppText';

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
          <AppText>{left}</AppText>
        </View>
        <View style={styles.right}>
          <AppText secondary>{right}</AppText>
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
});
