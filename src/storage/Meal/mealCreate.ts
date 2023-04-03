import { mealsGetAll } from "./mealsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { FormDataProps } from "src/types/others";

export async function mealCreate(newMeal: FormDataProps) {
  try {
    const storagedMeals = await mealsGetAll();

    let id = 1;

    if (!!storagedMeals[storagedMeals.length - 1]) {
      id += 1;
    }

    const storage = JSON.stringify([...storagedMeals, { ...newMeal, id }]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
