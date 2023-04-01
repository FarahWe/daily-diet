import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_5};
`;

export const Content = styled.View`
  padding: 24px;
`;

export const BodyContent = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_7};
  flex: 1;
  border-radius: 20px 0 0 20px;
  padding: 24px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const InputsContainer = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};

  margin-bottom: 4px;
`;
