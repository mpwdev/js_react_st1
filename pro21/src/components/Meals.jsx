import { useState, useEffect } from 'react';
import MealItem from './MealItem.jsx';

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
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal}></MealItem>;
      })}
    </ul>
  );
}
