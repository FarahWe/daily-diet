import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
  Container,
  ContainerInput,
  ErrorContainer,
  ErrorText,
  Label,
  WarningIcon,
} from "./styles";

type Props = TextInputProps & {
  label: string;
  viewStyle?: any;
  inputRef?: React.RefObject<TextInput>;
  error?: string;
};

export function Input({ inputRef, viewStyle, label, error, ...rest }: Props) {
  const { colors } = useTheme();

  const hasError = !!error;

  return (
    <Container style={viewStyle}>
      <Label>{label}</Label>

      <ContainerInput
        ref={inputRef}
        hasError={hasError}
        cursorColor={colors.gray_1}
        selectionColor={colors.gray_1}
        placeholderTextColor={colors.gray_4}
        {...rest}
      />

      {hasError && (
        <ErrorContainer>
          <WarningIcon />

          <ErrorText>{error}</ErrorText>
        </ErrorContainer>
      )}
    </Container>
  );
}
