import styled from "styled-components/native";

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
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;
`;

export const Footer = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 0 24px;
`;
