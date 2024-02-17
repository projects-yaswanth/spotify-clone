import { useQuery } from '@tanstack/react-query';
import { useDocumentTitle } from '@uidotdev/usehooks';
import styled from 'styled-components';
import { getHomeItems } from '../services/categoriesApi';

const H1 = styled.h1`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: -1rem;
`;


function Home() {
  useDocumentTitle('Spotify(Demo) - Web Player: Music For everyone');

  const {data, isLoading, error} = useQuery({
    queryKey : ["homepageCategories"],
    queryFn: getHomeItems
  });

  if(isLoading) return <H1>Loading.......</H1>
  return <>
    <H1>Home</H1>
    {data["category"]?.map((doc, i) => <h1 key={i} >{doc}</h1>)}
  </>;
}

export default Home;
