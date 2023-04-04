import { mealsGetAll } from "@storage/Meal/mealsGetAll";
import { SummaryType } from "src/types/summary";

export async function summaryGetAll() {
  try {
    const storagedMeals = await mealsGetAll();

    const mealsOnDiet = storagedMeals.filter((meal) => meal.isDietMeal).length;
    const mealsNotOnDiet = storagedMeals.filter(
      (meal) => !meal.isDietMeal
    ).length;

    const summary: SummaryType = {
      mealsCreated: storagedMeals.length,
      mealsOnDiet,
      mealsNotOnDiet,
      bestStrike: 0,
    };

    return summary;
  } catch (error) {
    throw error;
  }
}
