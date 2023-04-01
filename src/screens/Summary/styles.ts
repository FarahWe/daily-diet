import { TypeStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  type?: TypeStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "success" ? theme.colors.green_light : theme.colors.red_light};
`;

export const Content = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `}

  text-align: center;
  margin-bottom: 23px;
`;

export const BodyContent = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_7};
  flex: 1;
  border-radius: 20px 0 0 20px;
  padding: 24px;
`;

export const Card = styled.View<Props>`
  align-items: center;

  border-radius: 8px;
  width: 100%;

  background-color: ${({ theme, type }) =>
    type === "success"
      ? theme.colors.green_light
      : type === "error"
      ? theme.colors.red_light
      : theme.colors.gray_6};

  padding: 16px;
  margin-bottom: 12px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xxl}px;
  `}

  margin-bottom: 8px;
`;

export const CardSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
  `}

  text-align: center;
`;
