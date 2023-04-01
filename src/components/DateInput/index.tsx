import { Container, ContainerInput, Label, Placeholder, Title } from "./styles";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

type Props = {
  value: Date;
  type: "date" | "time";
  onChange: (date: Date) => void;
  label: string;
  placeholder: string;
  viewStyle?: any;
};

export function DateInput({
  viewStyle,
  placeholder,
  type,
  onChange,
  value,
  label,
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

  return (
    <Container style={viewStyle} activeOpacity={0.7} onPress={showDatePicker}>
      <Label>{label}</Label>

      <ContainerInput>
        {!!value ? (
          <Title>{title}</Title>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
      </ContainerInput>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={type}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
}
