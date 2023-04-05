import { TouchableOpacityProps } from "react-native";
import { Container, IconContainer, Title } from "./styles";
import { VariantStyleProps } from "src/types/others";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  variant?: VariantStyleProps;
  title: string;
  icon?: "plus" | "edit" | "delete";
};

export function Button({ variant = "primary", title, icon, ...rest }: Props) {
  const { colors } = useTheme();

  const Icon =
    icon === "plus" ? (
      <MaterialCommunityIcons size={18} color={colors.white} name="plus" />
    ) : icon === "edit" ? (
      <MaterialCommunityIcons
        size={18}
        color={colors.white}
        name="pencil-outline"
      />
    ) : (
      <MaterialCommunityIcons
        size={18}
        color={colors.gray_1}
        name="trash-can-outline"
      />
    );

  return (
    <Container variant={variant} activeOpacity={0.7} {...rest}>
      {icon && <IconContainer>{Icon}</IconContainer>}

      <Title variant={variant}>{title}</Title>
    </Container>
  );
}
