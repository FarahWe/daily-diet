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
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, isSelected, type }) => css`
    background-color: ${!isSelected
      ? theme.colors.gray_6
      : type === "success"
      ? theme.colors.green_light
      : theme.colors.red_light};

    border: ${isSelected ? "1px" : "0px"} solid
      ${type === "success" ? theme.colors.green_dark : theme.colors.red_dark};
  `};
`;

export const PointView = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
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
