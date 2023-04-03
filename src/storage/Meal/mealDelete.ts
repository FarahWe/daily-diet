import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealDelete(id: number) {
  try {
    const storagedMeals = await mealsGetAll();

    const newStoragedMealsWithoutDeletedMeal = storagedMeals.filter(
      (meal) => meal.id !== id
    );

    const storage = JSON.stringify(newStoragedMealsWithoutDeletedMeal);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
