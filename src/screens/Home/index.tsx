import {
  Avatar,
  ButtonContainer,
  Container,
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
import { useNavigation } from "@react-navigation/native";

const test = [
  {
    title: "29.03.23",
    data: [
      {
        name: "X-tudo",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: false,
        date: "20:00",
      },
      {
        name: "Arroz com frango",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: true,
        date: "20:00",
      },
      {
        name: "Misto quente",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: true,
        date: "20:00",
      },
      {
        name: "Macarrão com carne moída",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: true,
        date: "20:00",
      },
    ],
  },
  {
    title: "29.03.23",
    data: [
      {
        name: "X-tudo",
        hour: "20:00",
        date: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: false,
      },
      {
        name: "Arroz com frango",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: true,
        date: "20:00",
      },
      {
        name: "Misto quente",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: true,
        date: "20:00",
      },
      {
        name: "Macarrão com carne moída",
        hour: "20:00",
        description: "X-tudo caprichado demais",
        is_diet_meal: true,
        date: "20:00",
      },
    ],
  },
];

export function Home() {
  const { navigate } = useNavigation();

  function handleSummary() {
    navigate("summary");
  }

  function handleNewMeal() {
    navigate("newMeal");
  }

  return (
    <Container>
      <SectionList
        sections={test}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <MealCard data={item} />}
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

            <PercentResume percent={99.88} onPress={handleSummary} />

            <ButtonContainer>
              <Title>Refeições</Title>

              <Button
                title="Nova refeição"
                type="primary"
                onPress={handleNewMeal}
              />
            </ButtonContainer>
          </>
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
