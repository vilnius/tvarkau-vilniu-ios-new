// @flow
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Ellipsized from '../common-components/Ellipsized';
import StatusBadge from '../common-components/StatusBadge';
import type { StatusType } from '../api/model';

type Props = {
  headline?: string,
  description?: string,
  thumbnailUri?: string,
  style?: any,
  status: StatusType,
};

export default class IssueCard extends React.PureComponent<Props> {
  static defaultProps = {
    headline: '',
    description: '',
    thumbnailUri: undefined,
    style: {},
  };

  render() {
    const {
      headline, description, thumbnailUri, style, status,
    } = this.props;
    return (
      <View style={[styles.issueCard, style]}>
        <View style={styles.contentPart}>
          <Ellipsized text={headline || ''} style={styles.headline} />
          <Ellipsized text={description || ''} lines={2} style={styles.description} />
          {status && <StatusBadge status={status} style={styles.statusBadge} />}
        </View>
        <View style={styles.thumbnailPart}>
          {thumbnailUri && <Image source={{ uri: thumbnailUri }} style={styles.thumbnail} />}
        </View>
      </View>
    );
  }
}

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
  statusBadge: {
    marginTop: 7,
  },
});
