import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, ContainerInput, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  viewStyle?: any;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, viewStyle, label, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container style={viewStyle}>
      <Label>{label}</Label>

      <ContainerInput
        ref={inputRef}
        cursorColor={colors.gray_1}
        selectionColor={colors.gray_1}
        placeholderTextColor={colors.gray_4}
        {...rest}
      />
    </Container>
  );
}
