import { Header } from "@components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content, Footer } from "./styles";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { FormDataProps } from "src/types/others";
import { Form } from "@components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mealSchema } from "../../schemas/mealSchema";
import { Platform, ScrollView } from "react-native";
import { mealCreate } from "@storage/Meal/mealCreate";

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

  async function onSubmit(values: FormDataProps) {
    try {
      await mealCreate(values);
      console.log(values);

      navigate("feedback", { type: values.isDietMeal ? "success" : "error" });
    } catch (error) {
      // TODO: Fazer modal de alerta
    }
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Content>
        <Header title="Nova refeição" />
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
          title="Cadastrar refeição"
          style={{ marginBottom: insets.bottom !== 0 ? insets.bottom : 24 }}
        />
      </Footer>
    </Container>
  );
}
