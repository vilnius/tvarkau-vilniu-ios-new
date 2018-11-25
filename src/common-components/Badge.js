// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { iOSColors } from 'react-native-typography';
import AppText from './AppText';

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
        <AppText tertiary style={styles.badgeText}>
          {text.toUpperCase()}
        </AppText>
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
    color: iOSColors.white,
    textAlign: 'center',
  },
});
