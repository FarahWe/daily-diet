import { TouchableOpacity } from "react-native";
import { TypeStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  isSelected?: boolean;
  type: TypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 48px;
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, isSelected, type }) => css`
    background-color: ${!isSelected
      ? theme.colors.gray_6
      : type === "success"
      ? theme.colors.green_light
      : theme.colors.red_light};
    border-color: ${type === "success"
      ? theme.colors.green_dark
      : theme.colors.red_dark};

    border-width: ${isSelected && 1}px;
  `};
`;

export const PointView = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, type }) =>
    type === "success" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};
`;
