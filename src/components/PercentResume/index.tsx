import {
  Container,
  Icon,
  PercentResumeStyleProps,
  Subtitle,
  Title,
} from "./styles";

type Props = {
  percent: number;
};

export function PercentResume({ percent }: Props) {
  const type = percent > 50 ? "success" : "error";

  return (
    <Container type={type} activeOpacity={0.7}>
      <Title>{percent}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>

      <Icon />
    </Container>
  );
}
