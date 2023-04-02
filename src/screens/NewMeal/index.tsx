import { Header } from "@components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content } from "./styles";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { FormDataProps } from "src/types/others";
import { Form } from "@components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mealSchema } from "../../schemas/mealSchema";

export function NewMeal() {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(mealSchema),
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
        <Form control={control} errors={errors} />

        <Button onPress={handleSubmit(onSubmit)} title="Cadastrar refeição" />
      </BodyContent>
    </Container>
  );
}
