import { mealsGetAll } from "./mealsGetAll";

export async function mealGetById(id: number) {
  try {
    const storagedMeals = await mealsGetAll();

    const indexOfMeal = storagedMeals.findIndex((meal) => meal.id === id);

    return storagedMeals[indexOfMeal];
  } catch (error) {
    throw error;
  }
}
