import { useDocumentTitle } from '@uidotdev/usehooks';
import styled from 'styled-components';

const H1 = styled.h1`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: -1rem;
`;

function Home() {
  useDocumentTitle('Spotify(Demo) - Web Player: Music For everyone');
  return <H1>Home</H1>;
}

export default Home;
