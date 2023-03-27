import { ButtonStyleProps, Container, Icon, Title } from "./styles";

type Props = {
  type?: ButtonStyleProps;
  title: string;
  onPress: () => void;
};

export function Button({ type = "primary", title, onPress }: Props) {
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      {type === "primary" && <Icon />}

      <Title>{title}</Title>
    </Container>
  );
}
