import { TouchableOpacityProps } from "react-native";
import { Container, IconContainer, Title } from "./styles";
import { VariantStyleProps } from "src/types/others";
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
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
      <Plus size={18} color={colors.white} />
    ) : icon === "edit" ? (
      <PencilSimpleLine size={18} color={colors.white} />
    ) : (
      <Trash size={18} color={colors.gray_1} />
    );

  return (
    <Container variant={variant} activeOpacity={0.7} {...rest}>
      {icon && <IconContainer>{Icon}</IconContainer>}

      <Title variant={variant}>{title}</Title>
    </Container>
  );
}
