import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export type ButtonStyleProps = "primary" | "secondary";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray_2};

  flex-direction: row;

  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.white};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 18,
  weight: "fill",
}))`
  margin-right: 12px;
`;
