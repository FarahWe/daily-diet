import {
  BackButton,
  BackIcon,
  Container,
  HeaderStyleProps,
  Title,
  TransparentView,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  type?: HeaderStyleProps;
  title?: string;
};

export function Header({ type, title }: Props) {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("home");
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon type={type} />
      </BackButton>

      <Title>{title}</Title>

      <TransparentView />
    </Container>
  );
}
