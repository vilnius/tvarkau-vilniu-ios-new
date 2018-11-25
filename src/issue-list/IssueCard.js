// @flow
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { iOSColors } from 'react-native-typography';
import StatusBadge from '../common-components/StatusBadge';
import type { StatusType } from '../api/model';
import AppText from '../common-components/AppText';

type Props = {
  headline?: string,
  description: string,
  thumbnailUri?: string,
  style?: any,
  status: StatusType,
};

export default class IssueCard extends React.PureComponent<Props> {
  static defaultProps = {
    headline: '',
    thumbnailUri: undefined,
    style: {},
  };

  render() {
    const { headline, description, thumbnailUri, style, status } = this.props;
    return (
      <View style={[styles.issueCard, style]}>
        <View style={styles.contentPart}>
          <AppText headline>{headline || ''}</AppText>
          <AppText secondary gray lines={2} style={styles.description}>
            {description}
          </AppText>
          {!!status && <StatusBadge status={status} style={styles.statusBadge} />}
        </View>
        <View style={styles.thumbnailPart}>
          {!!thumbnailUri && <Image source={{ uri: thumbnailUri }} style={styles.thumbnail} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  issueCard: {
    backgroundColor: iOSColors.white,
    width: '100%',
    height: 110,
    padding: 10,
    flexDirection: 'row',
  },
  contentPart: {
    flex: 1,
    paddingRight: 10,
  },
  thumbnailPart: {
    flex: 0,
    width: 90,
    height: 90,
  },
  description: {
    minHeight: 36,
  },
  thumbnail: {
    flex: 1,
    borderRadius: 3,
  },
  statusBadge: {
    marginTop: 7,
  },
});
