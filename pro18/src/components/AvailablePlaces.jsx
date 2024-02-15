import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [avalablePlaces, setAvailablePlaces] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/places').then((response) => {
			return response.json();
		})
		.then((resData) => {
			setAvailablePlaces(resData.places);
		});

	}, []);

  

  return (
    <Places
      title="Available Places"
      places={avalablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
