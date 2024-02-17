import { useDocumentTitle } from '@uidotdev/usehooks';
import CategoryCards from '../features/Categories/CategoryCards';

function SearchPage() {
  useDocumentTitle('Spotify(Demo) - Search');

  return (
    <>
      <h2 style={{ padding: '4px 16px' }}>Browse All</h2>
      <CategoryCards />
    </>
  );
}

export default SearchPage;
