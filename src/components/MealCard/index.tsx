import { MealType } from "src/types/meal";
import { Container, DietMark, HourTitle, MealTitle } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  data: MealType;
};

export function MealCard({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <HourTitle>{data.hour}</HourTitle>

      <MealTitle>{data.name}</MealTitle>

      <DietMark is_diet_meal={data.is_diet_meal} />
    </Container>
  );
}
