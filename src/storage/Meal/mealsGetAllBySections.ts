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

    meals.forEach((meal) => {
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
      }
    });

    // Ordena as seções em ordem decrescente de data
    sections.sort(
      (a, b) =>
        dayjs(b.title, "DD.MM.YYYY").unix() -
        dayjs(a.title, "DD.MM.YYYY").unix()
    );
    console.log(storage);

    return sections;
  } catch (error) {
    throw error;
  }
}
