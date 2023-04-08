import { TypeStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  type: TypeStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "success" ? theme.colors.green_light : theme.colors.red_light};
`;

export const Content = styled.View`
  padding: 24px;
`;

export const BodyContent = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_7};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xxl}px;
  `};

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `};

  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};

  margin-bottom: 8px;
`;

export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `};

  margin-bottom: 24px;
`;

export const TagContainer = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;

  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-bottom-left-radius: 9999px;

  background-color: ${({ theme }) => theme.colors.gray_6};
`;

export const TagPoint = styled.View<Props>`
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

export const TagTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_1};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
  `};
`;
