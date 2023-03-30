import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
  variant?: "primary" | "secondary";
  percent: number;
};

export function PercentResume({
  percent,
  variant = "primary",
  ...rest
}: Props) {
  const type = percent > 50 ? "success" : "error";

  return (
    <Container
      type={type}
      activeOpacity={0.7}
      style={variant === "secondary" && { paddingTop: 0 }}
      {...rest}
    >
      <Title>{percent.toFixed(2)}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>

      {variant === "primary" && <Icon type={type} />}
    </Container>
  );
}
