import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)``;

export const CenteredModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalView = styled.View`
  height: 190px;
  background-color: ${({ theme }) => theme.colors.gray_7};
  width: 100%;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  padding: 12px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_2};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.lg}px;
  `};

  margin-bottom: 24px
  text-align: center;
`;
