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

export function Summary() {
  const insets = useSafeAreaInsets();

  const type = 100 > 50 ? "success" : "error";

  return (
    <Container type={type} style={{ paddingTop: insets.top }}>
      <Content>
        <Header type={type} />

        <PercentResume percent={99.0} variant="secondary" />
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
            <CardTitle>22</CardTitle>
            <CardSubtitle>
              melhor sequência de pratos dentro da dieta
            </CardSubtitle>
          </Card>
          <Card>
            <CardTitle>109</CardTitle>
            <CardSubtitle>refeições registradas</CardSubtitle>
          </Card>

          <CardContainer>
            <Card type="success" style={{ flex: 1, marginRight: 12 }}>
              <CardTitle>99</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </Card>

            <Card type="error" style={{ flex: 1 }}>
              <CardTitle>10</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </Card>
          </CardContainer>
        </ScrollView>
      </BodyContent>
    </Container>
  );
}
