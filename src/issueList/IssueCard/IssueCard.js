// @flow
import * as React from 'react';
import { Text, View, Image } from 'react-native';

type Props = {
  headline?: string,
  description?: string,
  thumbnailUri?: string,
  style?: any,
};

const defaultProps = {
  headline: '',
  description: '',
  thumbnailUri: undefined,
  style: {},
};

const IssueCard = ({
  headline, description, thumbnailUri, style,
}: Props) => (
  <View style={{
    width: '100%',
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 10,
    flexDirection: 'row',
    ...style,
  }}
  >
    <View style={{
      flex: 1,
      textAlign: 'left',
      paddingRight: 10,
    }}
    >
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={{
          color: '#111',
          fontWeight: 'bold',
          marginBottom: 5,
        }}
      >{headline}
      </Text>
      <Text ellipsizeMode="tail" numberOfLines={2} style={{ color: '#909095' }}>{description}</Text>
    </View>
    <View style={{
      flex: 0,
      width: 80,
      height: 80,
    }}
    >
      {thumbnailUri && <Image source={{ uri: thumbnailUri }} style={{ flex: 1 }} />}
    </View>
  </View>
);

IssueCard.defaultProps = defaultProps;

export default IssueCard;
