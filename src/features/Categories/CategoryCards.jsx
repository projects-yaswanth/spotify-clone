import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/categoriesApi';

const Cards = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  overflow: scroll;
  padding-bottom: 10rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function CategoryCards() {
  const {
    data: items,
    error,
    isLoading
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  if (error) return null;

  return (
    <Cards>
      {/* {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )} */}
      {items?.map((item) => (
        <CategoryCard key={item.catId} item={item} />
      ))}
    </Cards>
  );
}

export default CategoryCards;
