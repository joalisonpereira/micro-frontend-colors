import { Container, ContainerProps } from "./styles";

export interface HomeProps extends ContainerProps {}

function Home({}: HomeProps) {
  return <Container>@colors/gold</Container>;
}

export default Home;
