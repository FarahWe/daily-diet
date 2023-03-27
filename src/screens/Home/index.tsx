import { Avatar, Container, HomeHeader, Logo } from "./styles";

import logoImg from "@assets/Logo.png";
import { PercentResume } from "@components/PercentResume";

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
    </Container>
  );
}
