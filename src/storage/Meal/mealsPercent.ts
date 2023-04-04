import { mealsGetAll } from "./mealsGetAll";

export async function mealsPercent() {
  try {
    const storagedMeals = await mealsGetAll();

    const totalMeals = storagedMeals.length;
    const dietMeals = storagedMeals.filter((meal) => meal.isDietMeal).length;
    const dietPercentage = (dietMeals / totalMeals) * 100;

    return !dietPercentage ? 100 : Number(dietPercentage.toFixed(2));
  } catch (error) {
    throw error;
  }
}
