import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";
import { VariantStyleProps } from "src/types/others";

type Props = TouchableOpacityProps & {
  variant?: VariantStyleProps;
  title: string;
};

export function Button({ variant = "primary", title, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {variant === "primary" && <Icon />}

      <Title>{title}</Title>
    </Container>
  );
}
