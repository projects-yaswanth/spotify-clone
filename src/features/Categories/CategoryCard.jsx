import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  object-fit: cover;
  background-position: -30px -10px;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 85%;
`;

function CategoryCard({ item }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        const query = item.catName.split(' ').join('+').split('/').join('+');
        navigate(`/search/category/${query}`);
      }}
      style={{ backgroundImage: `url(${item.image})` }}>
      <h2>{item.catName}</h2>
    </Card>
  );
}

export default CategoryCard;
