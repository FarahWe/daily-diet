import { Header } from "@components/Header";
import {
  BodyContent,
  Container,
  Content,
  DateTime,
  Label,
  MealDetailsContainer,
  Subtitle,
  TagContainer,
  TagPoint,
  TagTitle,
  Title,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "@components/Button";
import { useRoute, useNavigation } from "@react-navigation/native";

type RouteParams = {
  id: number;
};

export function MealDetails() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { navigate } = useNavigation();

  const { id } = route.params as RouteParams;

  function handleEditMeal() {
    navigate("editMeal", { id });
  }

  return (
    <Container type="error" style={{ paddingTop: insets.top }}>
      <Content>
        <Header title="Refeição" />
      </Content>

      <BodyContent style={{ paddingBottom: insets.bottom }}>
        <MealDetailsContainer>
          <Title>X-tudo</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odio
            illum quibusdam quod voluptate hic id dolores vel nisi numquam
            voluptas expedita ipsam doloribus laborum quis saepe placeat,
            eveniet illo?
          </Subtitle>

          <Label>Data e hora</Label>

          <DateTime>22/02/23 ás 22:00</DateTime>

          <TagContainer>
            <TagPoint type="error" />

            <TagTitle>dentro da dieta</TagTitle>
          </TagContainer>
        </MealDetailsContainer>

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
