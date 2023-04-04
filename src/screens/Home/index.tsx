import {
  Avatar,
  ButtonContainer,
  Container,
  EmptyListText,
  HomeHeader,
  Logo,
  SectionItemSeparation,
  SectionTitle,
  Title,
} from "./styles";
import logoImg from "@assets/Logo.png";
import { PercentResume } from "@components/PercentResume";
import { Button } from "@components/Button";
import { SectionList } from "react-native";
import { MealCard } from "@components/MealCard";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { SectionsMealsType } from "src/types/others";
import { mealsGetAllBySections } from "@storage/Meal/mealsGetAllBySections";
import { Loading } from "@components/Loading";
import { mealsPercent } from "@storage/Meal/mealsPercent";

export function Home() {
  const { navigate } = useNavigation();

  const [meals, setMeals] = useState<SectionsMealsType>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  function handleSummary() {
    navigate("summary", { percent });
  }

  function handleNewMeal() {
    navigate("newMeal");
  }

  function handleMealDetails(id: number) {
    navigate("mealDetails", { id });
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAllBySections();
      setMeals(data);
    } catch (error) {
      // Alert.alert("Turmas", "Não foi possível carregar os grupos.");
    }
  }

  async function fetchPercent() {
    try {
      const data = await mealsPercent();
      setPercent(data);
    } catch (error) {}
  }

  useFocusEffect(
    useCallback(() => {
      try {
        setIsLoading(true);

        fetchMeals();
        fetchPercent();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }, [])
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <SectionList
        sections={meals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <MealCard onPress={() => handleMealDetails(item.id)} data={item} />
        )}
        ListHeaderComponent={() => (
          <>
            <HomeHeader>
              <Logo source={logoImg} />
              <Avatar
                source={{
                  uri: "https://avatars.githubusercontent.com/u/82952503?v=4",
                }}
              />
            </HomeHeader>

            <PercentResume percent={percent} onPress={handleSummary} />

            <ButtonContainer>
              <Title>Refeições</Title>

              <Button
                title="Nova refeição"
                variant="primary"
                icon="plus"
                onPress={handleNewMeal}
              />
            </ButtonContainer>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyListText>
            Você ainda não tem nenhuma refeição criada! Que tal criar a sua
            primeira refeição?
          </EmptyListText>
        )}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        renderSectionFooter={() => <SectionItemSeparation />}
      />
    </Container>
  );
}
