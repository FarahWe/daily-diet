import { TouchableOpacityProps } from "react-native";
import { Container, PointView, Title } from "./styles";
import { TypeStyleProps } from "src/types/others";

type Props = TouchableOpacityProps & {
  type: TypeStyleProps;
  isSelected?: boolean;
};

export function RadioBox({ type, isSelected, ...rest }: Props) {
  const title = type === "success" ? "Sim" : "Não";

  return (
    <Container
      type={type}
      isSelected={isSelected}
      activeOpacity={0.7}
      {...rest}
    >
      <PointView type={type} isSelected={isSelected} />

      <Title>{title}</Title>
    </Container>
  );
}
