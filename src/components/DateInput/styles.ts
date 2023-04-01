import { TouchableOpacity, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: auto;
  margin-bottom: 24px;
`;

export const ContainerInput = styled.View`
  min-height: 48px;

  padding: 14px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_7};
    border-color: ${theme.colors.gray_5};
  `};

  border-width: 2px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `};
`;

export const Placeholder = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_4};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};

  margin-bottom: 4px;
`;
