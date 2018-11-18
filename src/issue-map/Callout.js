// @flow
import * as React from 'react';
import {
  View, Image, StyleSheet, Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ellipsized from '../common-components/Ellipsized';

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
            <Image
              style={styles.thumbnail}
              source={{ uri: thumbnail }}
            />
          </View>
        )}
        <View style={styles.contentPart}>
          <Ellipsized text={title} style={styles.title} />
          <Ellipsized text={description} style={styles.description} />
        </View>
        <View style={styles.arrow}>
          <FontAwesome name="angle-right" size={24} color="#cacaca" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  callout: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#edece9',
    overflow: 'hidden',
    width: 350,
    height: 60,
  },
  thumbnailPart: {
    flex: 0,
    width: 60,
    height: 60,
  },
  thumbnail: {
    flex: 1,
  },
  contentPart: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
  },
  arrow: {
    flex: 0,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
