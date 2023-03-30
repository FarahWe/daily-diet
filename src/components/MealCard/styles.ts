import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  is_diet_meal: boolean;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;

  flex-direction: row;

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

    border-color: ${theme.colors.gray_4};
  `}

  padding-right: 12px;
  margin-right: 12px;
  border-right-width: 1px;
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

  background-color: ${({ theme, is_diet_meal }) =>
    is_diet_meal ? theme.colors.green_mid : theme.colors.red_mid};
`;
