import { GrDownload, GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Searchbar from '../features/Search/SearchBar';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

import { useState } from 'react';
import { HiBellAlert } from 'react-icons/hi2';


const DisplayLayout = styled.main`
  background-color: var(--color-grey-bgc);
  border-radius: 10px;
  flex-grow: 1;
  width: 100%;
  height: 97vh;
  overflow: hidden;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
`;

const Directions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function ContentLayout({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userImage = useSelector((state) => state.user.imageUrl);

  const handleBack = () => navigate(-1);
  const handleNext = () => navigate(1);

  const [toolBarOpen, setHandleTookBar] = useState(false);
  function handleToolBar() {
    setHandleTookBar((state) => !state);
  }

  return (
    <DisplayLayout>
      <StyledNav>
        <ButtonGroup
          fun1={handleBack}
          fun2={handleNext}
          prop1={<GrFormPrevious />}
          prop2={<GrFormNext />}
          variation="dark"
        />
        {pathname.startsWith('/search') && <Searchbar />}
        <Directions>
          <Button variation="dark" size="medium">
            <GrDownload /> <span>Install App</span>
          </Button>
          <ButtonGroup
            prop1={<HiBellAlert />}
            variation="dark"
            size="medium"
            onClick={handleToolBar}
            prop2={<img style={{ height: '30px', borderRadius: '50%' }} src={userImage} />}
          />
        </Directions>
        {toolBarOpen && (
          <ul>
            <li>Log out</li>
          </ul>
        )}
      </StyledNav>
      {children}
    </DisplayLayout>
  );
}

export default ContentLayout;
