import { MealType } from "src/types/meal";
import { Container, DietMark, HourTitle, MealTitle } from "./styles";

type Props = {
  data: MealType;
};

export function MealCard({ data }: Props) {
  return (
    <Container activeOpacity={0.7}>
      <HourTitle>{data.hour}</HourTitle>

      <MealTitle>{data.name}</MealTitle>

      <DietMark is_diet_meal={data.is_diet_meal} />
    </Container>
  );
}
