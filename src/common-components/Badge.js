// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string,
  color: string,
  style?: any,
};

export default class Badge extends React.PureComponent<Props> {
  static defaultProps = {
    style: undefined,
  };

  render() {
    const { text, color, style } = this.props;
    return (
      <View style={[styles.badge, { backgroundColor: color }, style]}>
        <Text style={styles.badgeText}>{text.toUpperCase()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    width: 100,
    padding: 1,
    borderRadius: 3,
  },
  badgeText: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
  },
});
