import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, Content } from "./styles";
import { Header } from "@components/Header";
import { useEffect, useState } from "react";
import { Loading } from "@components/Loading";
import { mealGetById } from "@storage/Meal/mealGetById";
import { MealType } from "src/types/meal";
import { EditMealBody } from "./components";

type RouteParams = {
  id: number;
};

export function EditMeal() {
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const { id } = route.params as RouteParams;

  const [meal, setMeal] = useState<MealType>();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMeal() {
    try {
      const data = await mealGetById(id);

      setMeal(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Content>
        <Header title="Editar refeição" />
      </Content>

      <EditMealBody meal={meal} />
    </Container>
  );
}
