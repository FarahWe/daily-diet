import { TouchableOpacity } from "react-native";
import { VariantStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  variant: VariantStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 50px;

  padding: 0 24px;
  align-items: center;
  justify-content: center;

  ${({ theme, variant }) => css`
    background-color: ${variant === "secondary"
      ? "transparent"
      : theme.colors.gray_2};
    border-width: ${variant === "secondary" && 1}px;
    border-color: ${variant === "secondary" && theme.colors.gray_1};
  `}

  flex-direction: row;

  border-radius: 6px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${variant === "secondary"
      ? theme.colors.gray_1
      : theme.colors.white};
  `}
`;

export const IconContainer = styled.View`
  margin-right: 12px;
`;
