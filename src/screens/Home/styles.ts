import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;
`;

export const HomeHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray_2};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_1};
  `}

  margin-bottom: 8px;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_1};
  `}

  margin-bottom: 8px;
`;

export const SectionItemSeparation = styled.View`
  margin-bottom: 32px;
`;
