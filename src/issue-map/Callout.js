// @flow
import * as React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { iOSColors } from 'react-native-typography';
import AppText from '../common-components/AppText';

type Props = {
  thumbnail?: string,
  title: string,
  description: string,
};

export default class Callout extends React.PureComponent<Props> {
  static defaultProps = {
    thumbnail: undefined,
  };

  adaptiveStyles = () => ({
    callout: {
      maxWidth: Dimensions.get('window').width - 45,
    },
  });

  render() {
    const { thumbnail, title, description } = this.props;
    const adaptiveStyles = this.adaptiveStyles();
    return (
      <View style={[styles.callout, adaptiveStyles.callout]}>
        {!!thumbnail && (
          <View style={styles.thumbnailPart}>
            <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
          </View>
        )}
        <View style={styles.contentPart}>
          <AppText>{title}</AppText>
          <AppText secondary>{description}</AppText>
        </View>
        <View style={styles.arrow}>
          <FontAwesome name="angle-right" size={24} color="#cacaca" />
        </View>
      </View>
    );
  }
}

// Can remove relative positioning after this is merged:
// https://github.com/react-community/react-native-maps/pull/1847
const bubbleInset = 12;

const styles = StyleSheet.create({
  callout: {
    backgroundColor: iOSColors.white,
    flexDirection: 'row',
    width: 350,
    height: 60 - 2 * bubbleInset - 1,
  },
  thumbnailPart: {
    flex: 0,
    position: 'relative',
    top: -bubbleInset,
    left: -bubbleInset,
    width: 60,
    height: 60,
  },
  thumbnail: {
    flex: 1,
  },
  contentPart: {
    flex: 1,
    marginTop: 8 - bubbleInset,
  },
  description: {
    lineHeight: 21,
  },
  arrow: {
    flex: 0,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
