import { PercentResumeStyleProps } from "@components/PercentResume/styles";
import styled, { css } from "styled-components/native";

type Props = {
  type?: PercentResumeStyleProps;
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
    font-size: ${theme.font_size["2xl"]}px;
  `}

  margin-bottom: 2px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
  `}
`;

export const BodyContent = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_7};
  flex: 1;
  border-radius: 20px 0px 0px 20px;
  padding: 24px;
`;
