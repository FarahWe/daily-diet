import { MealType } from "src/types/meal";
import { Container, DietMark, Divider, HourTitle, MealTitle } from "./styles";
import { TouchableOpacityProps } from "react-native";
import dayjs from "dayjs";

type Props = TouchableOpacityProps & {
  data: MealType;
};

export function MealCard({ data, ...rest }: Props) {
  const hour = dayjs(data.hour).format("HH:mm");

  return (
    <Container activeOpacity={0.7} {...rest}>
      <HourTitle>{hour}</HourTitle>

      <Divider />

      <MealTitle>{data.name}</MealTitle>

      <DietMark isDietMeal={data.isDietMeal} />
    </Container>
  );
}
