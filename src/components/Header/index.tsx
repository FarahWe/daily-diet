import { TypeStyleProps } from "src/types/others";
import {
  BackButton,
  BackIcon,
  Container,
  Title,
  TransparentView,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  type?: TypeStyleProps;
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
