// @flow
import { Text } from 'react-native';
import * as React from 'react';

type Props = {
  text: string,
  lines?: number,
  style?: any,
};

const defaultProps = {
  lines: 1,
  style: undefined,
};

const Ellipsized = ({ text, lines, style }: Props) => (
  <Text
    ellipsizeMode="tail"
    numberOfLines={lines}
    style={style}
  >{text}
  </Text>
);

Ellipsized.defaultProps = defaultProps;
export default Ellipsized;
