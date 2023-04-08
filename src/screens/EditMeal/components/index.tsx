import { Platform, ScrollView } from "react-native";
import { BodyContent, Footer } from "../styles";
import { Form } from "@components/Form";
import { useForm } from "react-hook-form";
import { FormDataProps } from "src/types/others";
import { yupResolver } from "@hookform/resolvers/yup";
import { mealSchema } from "../../../schemas/mealSchema";
import { MealType } from "src/types/meal";
import { Button } from "@components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { mealEdit } from "@storage/Meal/mealEdit";

type Props = {
  meal: MealType | undefined;
};

export function EditMealBody({ meal }: Props) {
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(mealSchema),
    defaultValues: {
      isDietMeal: meal?.isDietMeal,
      description: meal?.description,
      //@ts-ignore
      date: new Date(meal?.date),
      //@ts-ignore
      hour: new Date(meal?.hour),
      name: meal?.name,
    },
  });

  async function onSubmit(values: FormDataProps) {
    try {
      await mealEdit(values, meal?.id);

      navigate("mealDetails", { id: meal?.id });
    } catch (error) {}
  }

  return (
    <>
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
          style={{
            marginBottom: insets.bottom !== 0 ? insets.bottom + 24 : 24,
          }}
        />
      </Footer>
    </>
  );
}
