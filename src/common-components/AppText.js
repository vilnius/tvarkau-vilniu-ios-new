// @flow
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { human, iOSColors } from 'react-native-typography';

type TextProps = {
  lines?: number,
  ellipsis?: boolean,
  children?: React.Node,
  style?: any,
  headline?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  gray?: boolean,
};

export default class AppText extends React.PureComponent<TextProps> {
  static defaultProps = {
    lines: 1,
    ellipsis: true,
    children: undefined,
    style: undefined,
    headline: false,
    secondary: false,
    tertiary: false,
    gray: false,
  };

  combineStyle() {
    const { headline, secondary, tertiary, gray, style } = this.props;
    const combined = [];

    if (headline) {
      combined.push(human.headline);
    } else if (secondary) {
      combined.push(human.subhead);
    } else if (tertiary) {
      combined.push(human.footnote);
    } else {
      combined.push(human.body);
    }

    if (gray) {
      combined.push(styles.gray);
    }

    combined.push(style);

    return combined;
  }

  render() {
    const { lines, ellipsis, children } = this.props;
    const ellipsisProps = {
      ellipsizeMode: ellipsis ? 'tail' : undefined,
      numberOfLines: ellipsis ? lines : undefined,
    };
    return (
      <Text {...ellipsisProps} style={this.combineStyle()}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  gray: {
    color: iOSColors.gray,
  },
});
