// @flow
import * as React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { iOSColors } from 'react-native-typography';

type Props = {
  photos: string[],
};

export default class PhotosCarousel extends React.PureComponent<Props> {
  render() {
    const { photos } = this.props;
    return (
      <View style={styles.photo}>
        <Carousel
          pageSize={Dimensions.get('window').width}
          showsPageIndicator={photos.length > 1}
          activePageIndicatorStyle={styles.activePhotoIndicator}
        >
          {photos.map((uri, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index}>
              <Image style={styles.photo} source={{ uri }} />
            </View>
          ))}
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    height: 250,
  },
  activePhotoIndicator: {
    backgroundColor: iOSColors.white,
  },
});
