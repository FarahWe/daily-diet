import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BodyContent,
  Container,
  Content,
  Form,
  InputsContainer,
  Label,
} from "./styles";
import { Button } from "@components/Button";
import { RadioBox } from "@components/RadioBox";
import { Controller, useForm } from "react-hook-form";
import { DateInput } from "@components/DateInput";
import { useNavigation } from "@react-navigation/native";

type FormDataProps = {
  name: string;
  description: string;
  date: Date;
  hour: Date;
  isDietMeal: boolean | undefined;
};

export function NewMeal() {
  const { navigate } = useNavigation();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      isDietMeal: undefined,
    },
  });

  const insets = useSafeAreaInsets();

  function onSubmit(values: FormDataProps) {
    navigate("feedback", { type: values.isDietMeal ? "success" : "error" });
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Content>
        <Header title="Nova refeição" />
      </Content>

      <BodyContent style={{ paddingBottom: insets.bottom }}>
        <Form>
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
        </Form>

        <Button
          onPress={handleSubmit(onSubmit)}
          variant="secondary"
          title="Cadastrar refeição"
        />
      </BodyContent>
    </Container>
  );
}
