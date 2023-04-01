import { TouchableOpacityProps } from "react-native";
import { Container, PointView, Title, RadioBoxStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  type: RadioBoxStyleProps;
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
