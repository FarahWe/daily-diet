import { Control, Controller } from "react-hook-form";
import { Container, InputsContainer, Label } from "./styles";
import { Input } from "@components/Input";
import { DateInput } from "@components/DateInput";
import { RadioBox } from "@components/RadioBox";
import { FormDataProps } from "src/types/others";

type Props = {
  control: Control<FormDataProps, any>;
};

export function Form({ control }: Props) {
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
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange } }) => (
          <Input
            label="Descrição"
            placeholder="Ex: Arroz com Feijão com muita salada e com farofa."
            style={{ height: 120 }}
            multiline
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
            />
          )}
        />
      </InputsContainer>

      <Label>Está dentro da dieta?</Label>

      <Controller
        control={control}
        name="isDietMeal"
        render={({ field: { value, onChange } }) => (
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
        )}
      />
    </Container>
  );
}