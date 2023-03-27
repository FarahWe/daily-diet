import {
  Avatar,
  ButtonContainer,
  Container,
  HomeHeader,
  Logo,
  Title,
} from "./styles";

import logoImg from "@assets/Logo.png";
import { PercentResume } from "@components/PercentResume";
import { Button } from "@components/Button";

export function Home() {
  return (
    <Container>
      <HomeHeader>
        <Logo source={logoImg} />
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/82952503?v=4",
          }}
        />
      </HomeHeader>

      <PercentResume percent={20.88} />

      <ButtonContainer>
        <Title>Refeições</Title>

        <Button title="Nova refeição" type="primary" onPress={() => {}} />
      </ButtonContainer>
    </Container>
  );
}
