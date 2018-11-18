// @flow
import * as React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import type { Coordinates, Issue } from '../api/model';
import { listIssues } from '../api/legacyApi';
import statusColor from '../pallette/statusColor';

type Props = {};

type State = {
  loading: boolean,
  issues?: Issue[],
};

const cityCoordinates: Coordinates = {
  lat: 54.687157,
  lon: 25.279652,
};

export default class IssueMapScreen extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: false,
    issues: [],
  };

  async componentDidMount() {
    await this.initialFetch();
  }

  initialFetch = async () => {
    await this.setStateAsync({ loading: true });
    const issues = await listIssues();
    return this.setStateAsync({
      issues,
      loading: false,
    });
  };

  // $FlowFixMe
  setStateAsync = (state: any) => new Promise((resolve) => {
    this.setState(state, resolve);
  });

  render() {
    const { issues } = this.state;
    if (!issues) {
      return <View />;
    }
    const markers = issues
      .filter(issue => issue.location && issue.location.address && issue.location.coordinates)
      .map(issue => ({
        identifier: issue.id,
        title: issue.category,
        // $FlowFixMe
        description: issue.location.address,
        coordinate: {
          // $FlowFixMe
          latitude: issue.location.coordinates.lat,
          // $FlowFixMe
          longitude: issue.location.coordinates.lon,
        },
        pinColor: statusColor(issue.status),
      }))
      .map(marker => (
        <MapView.Marker
          key={marker.identifier}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          pinColor={marker.pinColor}
        />
      ));
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: cityCoordinates.lat,
          longitude: cityCoordinates.lon,
          latitudeDelta: 0.15,
          longitudeDelta: 0.075,
        }}
      >
        {markers}
      </MapView>
    );
  }
}
