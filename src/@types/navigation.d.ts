import { TypeStyleProps } from "src/types/others";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      summary: { percent: number };
      newMeal: undefined;
      feedback: { type: TypeStyleProps };
      mealDetails: { id?: number };
      editMeal: { id: number };
    }
  }
}
