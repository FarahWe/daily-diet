import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { TypeStyleProps } from "src/types/others";
import styled, { css } from "styled-components/native";

type Props = {
  type?: TypeStyleProps;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_1};
  `}
`;

export const BackButton = styled(TouchableOpacity)`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color:
    type === "success"
      ? theme.colors.green_dark
      : type === "error"
      ? theme.colors.red_dark
      : theme.colors.gray_2,
}))<Props>``;

export const TransparentView = styled.View`
  background-color: transparent;
  flex: 1;
`;
