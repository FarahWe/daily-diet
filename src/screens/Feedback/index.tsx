import { TypeStyleProps } from "src/types/others";
import { Container, Image, Subtitle, SubtitleSpan, Title } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import badfeedback from "@assets/Bad-feedback.png";
import nicefeedback from "@assets/Nice-feedback.png";
import { Button } from "@components/Button";

type RouteParams = {
  type: TypeStyleProps;
};

export function Feedback() {
  const route = useRoute();
  const { navigate } = useNavigation();

  function handleGoHome() {
    navigate("home");
  }

  const { type } = route.params as RouteParams;

  const subtitle =
    type === "success"
      ? ["Você continua ", ". Muito bem!"]
      : ["Você ", " dessa vez, mas continue se esforçando e não desista!"];

  const subtitleSpan = type === "success" ? "dentro da dieta" : "saiu da dieta";

  const image = type === "success" ? nicefeedback : badfeedback;

  return (
    <Container>
      <Title type={type}>
        {type === "success" ? "Continue assim!" : "Que pena!"}
      </Title>

      <Subtitle>
        {subtitle[0]}
        <SubtitleSpan>{subtitleSpan}</SubtitleSpan>
        {subtitle[1]}
      </Subtitle>

      <Image source={image} />

      <Button
        style={{ alignSelf: "center" }}
        variant="secondary"
        title="Ir para a página inicial"
        onPress={handleGoHome}
      />
    </Container>
  );
}
