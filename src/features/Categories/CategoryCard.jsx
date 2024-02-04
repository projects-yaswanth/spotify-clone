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
`;

function CategoryCard({ item }) {
  return (
    <Card style={{ backgroundImage: `url(${item.image})` }}>
      <h2>{item.catName}</h2>
    </Card>
  );
}

export default CategoryCard;
