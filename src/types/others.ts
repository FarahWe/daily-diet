import { MealType } from "./meal";

export type VariantStyleProps = "primary" | "secondary";

export type TypeStyleProps = "success" | "error";

export type FormDataProps = {
  name: string;
  description: string;
  date: Date;
  hour: Date;
  isDietMeal: boolean | undefined;
};

export type SectionsMealsType = {
  title: string;
  data: MealType[];
}[];
