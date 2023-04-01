import { useForm } from "react-hook-form";
import { FormDataProps } from "src/types/others";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content } from "./styles";
import { Header } from "@components/Header";
import { Form } from "@components/Form";
import { Button } from "@components/Button";

type RouteParams = {
  id: number;
};

export function EditMeal() {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParams;

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
    navigate("mealDetails", { id });
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Content>
        <Header title="Editar refeição" />
      </Content>

      <BodyContent style={{ paddingBottom: insets.bottom }}>
        <Form control={control} />

        <Button onPress={handleSubmit(onSubmit)} title="Salvar alterações" />
      </BodyContent>
    </Container>
  );
}
