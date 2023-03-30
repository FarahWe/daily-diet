import { Header } from "@components/Header";
import { PercentResume } from "@components/PercentResume";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content } from "./styles";

export function Summary() {
  const insets = useSafeAreaInsets();

  const type = 100 > 50 ? "success" : "error";

  return (
    <Container type={type} style={{ paddingTop: insets.top }}>
      <Content>
        <Header type={type} />

        <PercentResume percent={99.0} variant="secondary" />
      </Content>

      <BodyContent style={{ paddingBottom: insets.bottom }}></BodyContent>
    </Container>
  );
}
