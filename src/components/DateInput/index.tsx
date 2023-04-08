import {
  Container,
  ContainerInput,
  Label,
  Placeholder,
  Title,
  CenteredModal,
  ModalView,
  ButtonsContainer,
} from "./styles";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  ErrorContainer,
  ErrorText,
  WarningIcon,
} from "@components/Input/styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "styled-components/native";
import { Modal, Platform } from "react-native";
import { Button } from "@components/Button";

type Props = {
  value: Date;
  type: "date" | "time";
  onChange: (date: Date | undefined) => void;
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
  const { colors } = useTheme();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectDate, setSelectDate] = useState<Date | undefined>();

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

      {Platform.OS === "android" ? (
        isDatePickerVisible && (
          <DateTimePicker
            value={value ?? new Date()}
            mode={type}
            positiveButton={{ label: "OK", textColor: colors.gray_1 }}
            negativeButton={{ label: "Cancelar", textColor: colors.gray_1 }}
            is24Hour={true}
            maximumDate={type === "date" ? new Date() : undefined}
            onChange={(_, date) => {
              hideDatePicker();

              onChange(date);
            }}
          />
        )
      ) : (
        <Modal
          visible={isDatePickerVisible}
          transparent
          statusBarTranslucent
          onRequestClose={hideDatePicker}
          animationType="slide"
        >
          <CenteredModal onPress={hideDatePicker}>
            <ModalView>
              <DateTimePicker
                display="spinner"
                value={value ?? new Date()}
                mode={type}
                positiveButton={{ label: "OK", textColor: colors.gray_1 }}
                negativeButton={{ label: "Cancelar", textColor: colors.gray_1 }}
                is24Hour={true}
                maximumDate={type === "date" ? new Date() : undefined}
                onChange={(_, date) => {
                  setSelectDate(date);
                }}
              />

              <ButtonsContainer>
                <Button
                  style={{ flex: 1, marginRight: 12 }}
                  title="Cancelar"
                  variant="secondary"
                  onPress={hideDatePicker}
                />
                <Button
                  style={{ flex: 1 }}
                  title="Ok"
                  onPress={() => {
                    hideDatePicker();

                    onChange(selectDate);
                  }}
                />
              </ButtonsContainer>
            </ModalView>
          </CenteredModal>
        </Modal>
      )}
    </Container>
  );
}
