import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type PercentResumeStyleProps = "success" | "error";

type Props = {
  type?: PercentResumeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "success" ? theme.colors.green_light : theme.colors.red_light};

  border-radius: 8px;

  padding: 20px 16px;
  margin-top: 33px;
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
