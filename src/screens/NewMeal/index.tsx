import { Header } from "@components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content } from "./styles";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { FormDataProps } from "src/types/others";
import { Form } from "@components/Form";

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
        <Form control={control} />

        <Button onPress={handleSubmit(onSubmit)} title="Cadastrar refeição" />
      </BodyContent>
    </Container>
  );
}
