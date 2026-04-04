"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="ml-8">
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>

      {!ingredient ? (
        <p className="text-slate-300">Select an item to see meal ideas.</p>
      ) : (
        <>
          <p className="text-slate-300 mb-3">
            Here are some meal ideas using <span className="font-bold">{ingredient}</span>:
          </p>

          {meals.length === 0 ? (
            <p className="text-slate-400">No meal ideas found.</p>
          ) : (
            <ul className="space-y-3">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-slate-800 p-3 rounded-lg text-white"
                >
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}