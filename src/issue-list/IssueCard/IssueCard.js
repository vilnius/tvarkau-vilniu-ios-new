// @flow
import * as React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  issueCard: {
    width: '100%',
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 10,
    flexDirection: 'row',
  },
  contentPart: {
    flex: 1,
    textAlign: 'left',
    paddingRight: 10,
  },
  thumbnailPart: {
    flex: 0,
    width: 80,
    height: 80,
  },
  headline: {
    color: '#111',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#909095',
  },
  thumbnail: {
    flex: 1,
  },
});

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

const Ellipsized = ({ text, lines, style }: { text: string, lines?: number, style?: any}) => <Text ellipsizeMode="tail" numberOfLines={lines} style={style}>{text}</Text>;

Ellipsized.defaultProps = {
  lines: 1,
  style: undefined,
};

const IssueCard = ({
  headline, description, thumbnailUri, style,
}: Props) => (
  <View style={[styles.issueCard, style]}>
    <View style={styles.contentPart}>
      <Ellipsized text={headline || ''} style={styles.headline} />
      <Ellipsized text={description || ''} lines={2} style={styles.description} />
    </View>
    <View style={styles.thumbnailPart}>
      {thumbnailUri && <Image source={{ uri: thumbnailUri }} style={styles.thumbnail} />}
    </View>
  </View>
);

IssueCard.defaultProps = defaultProps;

export default IssueCard;
