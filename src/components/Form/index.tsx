import { Control, Controller, FieldErrors } from "react-hook-form";
import { Container, InputsContainer, Label } from "./styles";
import { Input } from "@components/Input";
import { DateInput } from "@components/DateInput";
import { RadioBox } from "@components/RadioBox";
import { FormDataProps } from "src/types/others";
import {
  ErrorContainer,
  ErrorText,
  WarningIcon,
} from "@components/Input/styles";

type Props = {
  control: Control<FormDataProps, any>;
  errors: FieldErrors<FormDataProps>;
};

export function Form({ control, errors }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            label="Nome"
            placeholder="Ex: Arroz com Feijão"
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            label="Descrição"
            placeholder="Ex: Arroz com Feijão com muita salada e com farofa."
            style={{ height: 120 }}
            multiline
            error={errors.description?.message}
          />
        )}
      />

      <InputsContainer>
        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <DateInput
              type="date"
              label="Data"
              value={value}
              onChange={onChange}
              placeholder="Ex: 20/02/2023"
              error={errors.date?.message}
              viewStyle={{ flex: 1, marginRight: 20 }}
            />
          )}
        />
        <Controller
          control={control}
          name="hour"
          render={({ field: { value, onChange } }) => (
            <DateInput
              type="time"
              label="Hora"
              value={value}
              onChange={onChange}
              placeholder="Ex: 10:00"
              viewStyle={{ flex: 1 }}
              error={errors.hour?.message}
            />
          )}
        />
      </InputsContainer>

      <Label>Está dentro da dieta?</Label>

      <Controller
        control={control}
        name="isDietMeal"
        render={({ field: { value, onChange } }) => (
          <>
            <InputsContainer>
              <RadioBox
                isSelected={value}
                onPress={() => onChange(true)}
                type="success"
                style={{ flex: 1, marginRight: 8 }}
              />
              <RadioBox
                onPress={() => onChange(false)}
                type="error"
                isSelected={value === false}
                style={{ flex: 1 }}
              />
            </InputsContainer>

            {errors.isDietMeal?.message && (
              <ErrorContainer>
                <WarningIcon />

                <ErrorText>{errors.isDietMeal.message}</ErrorText>
              </ErrorContainer>
            )}
          </>
        )}
      />
    </Container>
  );
}
