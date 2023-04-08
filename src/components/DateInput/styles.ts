import { TouchableOpacity, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  hasError: boolean;
};

export const Container = styled(TouchableOpacity)`
  width: auto;
  margin-bottom: 24px;
`;

export const ContainerInput = styled.View<Props>`
  min-height: 48px;

  padding: 14px;

  ${({ theme, hasError }) => css`
    background-color: ${theme.colors.gray_7};
    border: 2px ${hasError ? theme.colors.red_dark : theme.colors.gray_5};
  `};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
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

export const CenteredModal = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_7};
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  margin-top: 28px;
`;
