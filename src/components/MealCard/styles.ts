import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isDietMeal: boolean;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray_5};
  border-width: 1px;

  padding: 14px 16px 14px 12px;
  margin-bottom: 8px;
`;

export const HourTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xs}px;
    color: ${theme.colors.gray_1};
  `}
`;

export const Divider = styled.View`
  margin: 0 12px;
  height: 100%;
  width: 1px;

  background-color: ${({ theme }) => theme.colors.gray_3};
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_2};
  `}

  flex: 1;
`;

export const DietMark = styled.View<Props>`
  height: 14px;
  width: 14px;

  border-radius: 7px;

  background-color: ${({ theme, isDietMeal }) =>
    isDietMeal ? theme.colors.green_mid : theme.colors.red_mid};
`;
