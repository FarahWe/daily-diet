import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { TypeStyleProps } from "src/types/others";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  type?: TypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "success" ? theme.colors.green_light : theme.colors.red_light};

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  padding: 20px 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size["2xl"]}px;
  `}

  margin-bottom: 2px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
  `}
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: type === "success" ? theme.colors.green_dark : theme.colors.red_dark,
  size: 24,
  name: "arrow-up-right",
}))<Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;
