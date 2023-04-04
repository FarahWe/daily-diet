import { MealType } from "src/types/meal";
import { mealsGetAll } from "./mealsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { FormDataProps } from "src/types/others";

export async function mealEdit(newMeal: FormDataProps, id: number | undefined) {
  try {
    const storagedMeals = await mealsGetAll();

    const newMealsWithEditMeal = storagedMeals.map((meal) => {
      if (meal.id === id) {
        return { ...newMeal, id };
      }

      return meal;
    });

    const storage = JSON.stringify(newMealsWithEditMeal);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
