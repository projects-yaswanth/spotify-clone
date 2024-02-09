import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { searchItems } from '../services/categoriesApi';

function CategoryExplorePage() {
  const params = useParams();
  params.q = params.q.split('+').join(' ');

  const { data, error, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: () => searchItems(params.q)
  });
  if (isLoading) return <h1>Loading...</h1>;
  const {
    albums: { items: albumItems },
    tracks: { items: trackItems }
  } = data;

  // console.log(isLoading);

  return (
    <>
      <h1>{params.q}</h1>
      {trackItems && (
        <audio controls>
          <source src={trackItems[0].preview_url} />
        </audio>
      )}
    </>
  );
}

export default CategoryExplorePage;
