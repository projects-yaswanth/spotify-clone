import styled from 'styled-components';
import Button from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const OverLay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  background-color: var(--color-grey-bgc);

  & img {
    height: 65px;
    width: 65px;
  }

  & div h1 {
    font-size: 4rem;
    font-weight: boloder;
    font-family: var(--font-roboto-100);
  }

  & div p {
    color: var(--color-grey-100);
    text-align: center;
  }
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <OverLay>
      <img src="spotify.png" alt="" srcset="" />
      <div>
        <h1>Page Not Found</h1>
        <p>We can't seem to find the page you are looking for.</p>
      </div>
      <Button color="white">Home</Button>
      <button onClick={() => navigate(-1)}>GoBack</button>
    </OverLay>
  );
}

export default PageNotFound;
