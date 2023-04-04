import { Header } from "@components/Header";
import { PercentResume } from "@components/PercentResume";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BodyContent,
  Card,
  CardContainer,
  CardSubtitle,
  CardTitle,
  Container,
  Content,
  Title,
} from "./styles";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { SummaryType } from "src/types/summary";
import { summaryGetAll } from "@storage/Summary/summaryGetAll";
import { Loading } from "@components/Loading";
import { useRoute } from "@react-navigation/native";
import { Alert } from "@components/Alert";

type RouteParams = {
  percent: number;
};

export function Summary() {
  const insets = useSafeAreaInsets();
  const route = useRoute();

  const { percent } = route.params as RouteParams;

  const [summary, setSummary] = useState<SummaryType>();
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const type = 100 > 50 ? "success" : "error";

  async function fetchSummary() {
    try {
      const data = await summaryGetAll();
      setSummary(data);
    } catch (error) {
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSummary();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container type={type} style={{ paddingTop: insets.top }}>
      <Content>
        <Header type={type} />

        <PercentResume percent={percent} variant="secondary" />
      </Content>

      <BodyContent style={{ paddingBottom: insets.bottom }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Title>Estatísticas gerais</Title>

          <Card>
            <CardTitle>{summary?.bestStrike}</CardTitle>
            <CardSubtitle>
              melhor sequência de pratos dentro da dieta
            </CardSubtitle>
          </Card>
          <Card>
            <CardTitle>{summary?.mealsCreated}</CardTitle>
            <CardSubtitle>refeições registradas</CardSubtitle>
          </Card>

          <CardContainer>
            <Card type="success" style={{ flex: 1, marginRight: 12 }}>
              <CardTitle>{summary?.mealsOnDiet}</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </Card>

            <Card type="error" style={{ flex: 1 }}>
              <CardTitle>{summary?.mealsNotOnDiet}</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </Card>
          </CardContainer>
        </ScrollView>
      </BodyContent>

      <Alert
        visible={showModal}
        setVisible={setShowModal}
        message="Error em carregar as estatícas da dieta."
      />
    </Container>
  );
}
