import { Header } from "@components/Header";
import {
  BodyContent,
  Container,
  Content,
  DateTime,
  Label,
  Subtitle,
  TagContainer,
  TagPoint,
  TagTitle,
  Title,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { MealType } from "src/types/meal";
import { mealGetById } from "@storage/Meal/mealGetById";
import dayjs from "dayjs";

type RouteParams = {
  id: number;
};

export function MealDetails() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { navigate } = useNavigation();

  const { id } = route.params as RouteParams;

  const [meal, setMeal] = useState<MealType>();
  const [isLoading, setIsLoading] = useState(true);

  function handleEditMeal() {
    navigate("editMeal", { id });
  }

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
    <Container
      type={meal?.isDietMeal ? "success" : "error"}
      style={{ paddingTop: insets.top }}
    >
      <Content>
        <Header title="Refeição" />
      </Content>

      <BodyContent style={{ paddingBottom: insets.bottom }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Title>{meal?.name}</Title>
          <Subtitle>{meal?.description}</Subtitle>

          <Label>Data e hora</Label>

          <DateTime>
            {dayjs(meal?.date).format("DD/MM/YYYY")} ás{" "}
            {dayjs(meal?.hour).format("HH:mm")}
          </DateTime>

          <TagContainer>
            <TagPoint type={meal?.isDietMeal ? "success" : "error"} />

            <TagTitle>
              {meal?.isDietMeal ? "dentro da dieta" : "fora da dieta"}
            </TagTitle>
          </TagContainer>
        </ScrollView>

        <Button
          icon="edit"
          onPress={handleEditMeal}
          title="Editar refeição"
          style={{ marginBottom: 8 }}
        />

        <Button variant="secondary" icon="delete" title="Excluir refeição" />
      </BodyContent>
    </Container>
  );
}
