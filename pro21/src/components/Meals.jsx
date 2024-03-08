import { useState, useEffect } from 'react';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals', {
        method: 'GET',
      });

      if (!response.ok) {
        // ...err
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meals) => {
        return <li key={meals.id}>{meals.name}</li>;
      })}
    </ul>
  );
}
