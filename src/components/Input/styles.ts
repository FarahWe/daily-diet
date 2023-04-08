import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

type Props = {
  hasError: boolean;
};

export const Container = styled.View`
  width: auto;
  margin-bottom: 24px;
`;

export const ContainerInput = styled(TextInput)<Props>`
  min-height: 48px;

  padding: 14px;

  ${({ theme, hasError }) => css`
    background-color: ${theme.colors.gray_7};
    color: ${theme.colors.gray_1};

    border: 2px ${hasError ? theme.colors.red_dark : theme.colors.gray_5};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `};

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};

  margin-bottom: 4px;
`;

export const ErrorContainer = styled.View`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red_dark};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xs}px;
  `};

  margin-left: 4px;
`;

export const WarningIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.red_dark,
  name: "alert-circle-outline",
}))``;
