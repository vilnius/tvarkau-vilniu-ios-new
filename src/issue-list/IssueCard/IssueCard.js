// @flow
import * as React from 'react';
import {
  View, Image, StyleSheet,
} from 'react-native';
import Ellipsized from '../../common-components/Ellipsized';
import Badge from '../../common-components/Badge';

const styles = StyleSheet.create({
  issueCard: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 10,
    flexDirection: 'row',
  },
  contentPart: {
    flex: 1,
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
  },
  description: {
    marginTop: 5,
    color: '#909095',
  },
  thumbnail: {
    flex: 1,
    borderRadius: 3,
  },
  badge: {
    marginTop: 7,
  },
});

type Props = {
  headline?: string,
  description?: string,
  thumbnailUri?: string,
  style?: any,
  status?: string,
};

const defaultProps = {
  headline: '',
  description: '',
  thumbnailUri: undefined,
  style: {},
  status: undefined,
};

const IssueCard = ({
  headline, description, thumbnailUri, style, status,
}: Props) => (
  <View style={[styles.issueCard, style]}>
    <View style={styles.contentPart}>
      <Ellipsized text={headline || ''} style={styles.headline} />
      <Ellipsized text={description || ''} lines={2} style={styles.description} />
      {status && <Badge text={status} color="#39b54a" style={styles.badge} />}
    </View>
    <View style={styles.thumbnailPart}>
      {thumbnailUri && <Image source={{ uri: thumbnailUri }} style={styles.thumbnail} />}
    </View>
  </View>
);

IssueCard.defaultProps = defaultProps;

export default IssueCard;
