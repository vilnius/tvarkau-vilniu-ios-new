// @flow
import * as React from 'react';
import { Text } from 'react-native';

type Props = {
  text: string,
  lines?: number,
  style?: any,
};

export default class Ellipsized extends React.PureComponent<Props> {
  static defaultProps = {
    lines: 1,
    style: undefined,
  };

  render() {
    const { text, lines, style } = this.props;
    return (
      <Text ellipsizeMode="tail" numberOfLines={lines} style={style}>
        {text}
      </Text>
    );
  }
}
