// @flow
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
  text: string,
  color: string,
  style?: any,
};

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

const defaultProps = {
  style: undefined,
};

const Badge = ({ text, color, style }: Props) => (
  <View style={[styles.badge, { backgroundColor: color }, style]}>
    <Text style={styles.badgeText}>{text.toUpperCase()}</Text>
  </View>
);

Badge.defaultProps = defaultProps;

export default Badge;
