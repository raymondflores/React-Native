import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(track => track._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map(location => location.coords)}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
