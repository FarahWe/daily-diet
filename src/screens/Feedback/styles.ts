import { SafeAreaView } from "react-native-safe-area-context";
import { TypeStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  type: TypeStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.font_family.bold};
    color: ${type === "success"
      ? theme.colors.green_dark
      : theme.colors.red_dark};

    font-size: ${theme.font_size.xxl}px;
  `};

  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_1};

    font-size: ${theme.font_size.md}px;
  `};

  text-align: center;
`;

export const SubtitleSpan = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
`;

export const Image = styled.Image`
  height: 40%;

  margin: 40px 0;
  align-self: center;
`;
