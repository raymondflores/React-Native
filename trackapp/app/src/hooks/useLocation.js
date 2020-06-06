import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { status } = await requestPermissionsAsync();
        const subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );

        if (status !== 'granted') {
          throw new Error('Location permission not granted');
        }
      } catch (err) {
        setError(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      subscriber?.remove();
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [error];
};
