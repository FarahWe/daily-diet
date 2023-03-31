import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BodyContent, Container, Content, InputsContainer } from "./styles";

export function NewMeal() {
  const insets = useSafeAreaInsets();
  return (
    <Container style={{ paddingTop: insets.top }}>
      <Content>
        <Header title="Nova refeição" />
      </Content>

      <BodyContent>
        <Input label="Nome" placeholder="Ex: Arroz com Feijão" />
        <Input
          label="Descrição"
          placeholder="Ex: Arroz com Feijão com muita salada e com farofa."
          style={{ height: 120 }}
          multiline
        />

        <InputsContainer>
          <Input
            label="Data"
            placeholder="Ex: 20/02/2023"
            viewStyle={{ flex: 1, marginRight: 20 }}
          />

          <Input label="Hora" placeholder="Ex: 10:00" viewStyle={{ flex: 1 }} />
        </InputsContainer>
      </BodyContent>
    </Container>
  );
}
