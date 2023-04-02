import * as Yup from "yup";

export const mealSchema = Yup.object({
  name: Yup.string().required("Nome da refeição é obrigatória!"),
  description: Yup.string(),
  date: Yup.date().required("Dia que comeu a refeição é obrigatória"),
  hour: Yup.date().required("Hora que comeu a refeição é obrigatória"),
  isDietMeal: Yup.boolean().required(
    "Você precisa informar se a refeição está dentro da dieta ou não!"
  ),
});
