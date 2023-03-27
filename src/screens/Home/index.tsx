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

      <PercentResume
        type="success"
        title="90,86%"
        subtitle="das refeições dentro da dieta"
      />
    </Container>
  );
}
