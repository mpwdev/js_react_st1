import { useState, useEffect } from 'react';

import Error from './Error.jsx';
import Places from './Places.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [avalablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        // const response = await fetch('http://localhost:3000/places');
        // const resData = await response.json();

        // if (!response.ok) {
        //   throw new Error('Failed to fetch places');
        // }
       const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            // resData.places,
						places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
        setIsFetching(false);
      }

      // setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message}></Error>;
  }

  // useEffect(() => {
  // 	fetch('http://localhost:3000/places').then((response) => {
  // 		return response.json();
  // 	})
  // 	.then((resData) => {
  // 		setAvailablePlaces(resData.places);
  // 	});

  // }, []);

  return (
    <Places
      title="Available Places"
      places={avalablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
