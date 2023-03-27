import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray_7};

  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.gray_1,
  size: "large",
}))``;
