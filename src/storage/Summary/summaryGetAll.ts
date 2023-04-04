import { mealsGetAll } from "@storage/Meal/mealsGetAll";
import dayjs from "dayjs";
import { SummaryType } from "src/types/summary";

export async function summaryGetAll() {
  try {
    const storagedMeals = await mealsGetAll();

    const mealsOnDiet = storagedMeals.filter((meal) => meal.isDietMeal).length;
    const mealsNotOnDiet = storagedMeals.filter(
      (meal) => !meal.isDietMeal
    ).length;

    const sortedMeals = storagedMeals.sort(
      (meal1, meal2) => dayjs(meal2.hour).unix() - dayjs(meal1.hour).unix()
    );

    let currentSequenceLength = 0;
    let longestSequenceLength = 0;

    // Percorre a lista em busca da sequência mais longa de refeições consecutivas dentro da dieta
    for (let i = 0; i < sortedMeals.length; i++) {
      const meal = sortedMeals[i];

      if (meal.isDietMeal) {
        // A refeição faz parte da dieta, aumenta a sequência atual
        currentSequenceLength++;
      } else {
        // A refeição não faz parte da dieta, atualiza a sequência mais longa e reinicia a sequência atual
        longestSequenceLength = Math.max(
          longestSequenceLength,
          currentSequenceLength
        );
        currentSequenceLength = 0;
      }
    }

    // Atualiza a sequência mais longa novamente para garantir que seja o comprimento máximo entre a sequência atual e a mais longa
    longestSequenceLength = Math.max(
      longestSequenceLength,
      currentSequenceLength
    );

    const summary: SummaryType = {
      mealsCreated: storagedMeals.length,
      mealsOnDiet,
      mealsNotOnDiet,
      bestStrike: longestSequenceLength,
    };

    return summary;
  } catch (error) {
    throw error;
  }
}
