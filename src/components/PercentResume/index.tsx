import { Container, PercentResumeStyleProps, Subtitle, Title } from "./styles";

type Props = {
  type?: PercentResumeStyleProps;
  title: string;
  subtitle: string;
};

export function PercentResume({ type = "success", subtitle, title }: Props) {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
