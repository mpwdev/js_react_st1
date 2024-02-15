import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [avalablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }

		fetchPlaces();
  }, []);

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
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
