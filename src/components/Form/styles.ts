import styled, { css } from "styled-components/native";

export const Container = styled.View`
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
