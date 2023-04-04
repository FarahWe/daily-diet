import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import dayjs from "dayjs";
import { MealType } from "src/types/meal";
import { SectionsMealsType } from "src/types/others";

export async function mealsGetAllBySections() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealType[] = storage ? JSON.parse(storage) : [];

    let sections: SectionsMealsType = [];

    const sortedMeals = meals.sort(
      (meal1, meal2) => dayjs(meal2.hour).unix() - dayjs(meal1.hour).unix()
    );

    sortedMeals.forEach((meal) => {
      const date = dayjs(meal.date).format("DD.MM.YYYY");
      let sectionIndex = sections.findIndex(
        (section) => section.title === date
      );

      if (sectionIndex === -1) {
        sections.push({
          title: date,
          data: [meal],
        });
      } else {
        sections[sectionIndex].data.push(meal);

        sections[sectionIndex].data.sort(
          (a, b) => dayjs(a.hour).unix() - dayjs(b.hour).unix()
        );
      }
    });

    return sections;
  } catch (error) {
    throw error;
  }
}
