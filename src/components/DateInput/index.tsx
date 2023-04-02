import { Container, ContainerInput, Label, Placeholder, Title } from "./styles";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";
import {
  ErrorContainer,
  ErrorText,
  WarningIcon,
} from "@components/Input/styles";

type Props = {
  value: Date;
  type: "date" | "time";
  onChange: (date: Date) => void;
  label: string;
  placeholder: string;
  viewStyle?: any;
  error?: string;
};

export function DateInput({
  viewStyle,
  placeholder,
  type,
  onChange,
  value,
  label,
  error,
}: Props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const title =
    type === "date"
      ? dayjs(value).format("DD/MM/YY")
      : dayjs(value).format("HH:mm");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  const hasError = !!error;

  return (
    <Container style={viewStyle} activeOpacity={0.7} onPress={showDatePicker}>
      <Label>{label}</Label>

      <ContainerInput hasError={hasError}>
        {!!value ? (
          <Title>{title}</Title>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
      </ContainerInput>

      {hasError && (
        <ErrorContainer>
          <WarningIcon />

          <ErrorText>{error}</ErrorText>
        </ErrorContainer>
      )}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={type}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
}
