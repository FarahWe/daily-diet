import { TypeStyleProps } from "src/types/others";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      summary: undefined;
      newMeal: undefined;
      feedback: { type: TypeStyleProps };
    }
  }
}
