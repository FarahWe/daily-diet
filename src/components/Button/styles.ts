import { TouchableOpacity } from "react-native";
import { VariantStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  variant: VariantStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;

  padding: 0 24px;
  align-items: center;
  justify-content: center;

  ${({ theme, variant }) => css`
    background-color: ${variant === "secondary"
      ? "transparent"
      : theme.colors.gray_2};
    border: ${variant === "secondary" && "1px"}
      ${variant === "secondary" && theme.colors.gray_1};
  `}

  flex-direction: row;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
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
