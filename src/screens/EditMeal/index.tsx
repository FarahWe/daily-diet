import { useForm } from "react-hook-form";
import { FormDataProps } from "src/types/others";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content, Footer } from "./styles";
import { Header } from "@components/Header";
import { Form } from "@components/Form";
import { Button } from "@components/Button";
import { mealSchema } from "../../schemas/mealSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Platform, ScrollView } from "react-native";

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
    resolver: yupResolver(mealSchema),
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

      <BodyContent>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Form control={control} errors={errors} />
        </ScrollView>
      </BodyContent>
      <Footer
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={10}
      >
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Salvar alterações"
          style={{ marginBottom: insets.bottom !== 0 ? insets.bottom : 24 }}
        />
      </Footer>
    </Container>
  );
}
