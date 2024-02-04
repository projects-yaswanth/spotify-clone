import styled from 'styled-components';
import PageNav from './PageNav';
import { Outlet } from 'react-router-dom';
import PlayListCard from './PlayListCard';
import ContentLayout from './ContentLayout';
import { useEffect, useState } from 'react';
import Column from './Column';
import { useWindowSize } from '@uidotdev/usehooks';

const StyledDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  gap: 0.5rem;
  font-family: var(--font-roboto-100);
  display: flex;
`;

function AppLayout() {
  const [openNav, setOpenNav] = useState(false);
  const windowSize = useWindowSize();
  function handleCloseNav() {
    setOpenNav((e) => !e);
  }

  useEffect(
    function () {
      const { width } = windowSize;
      if (width <= 1295) setOpenNav(true);
      else setOpenNav(false);
    },
    [windowSize, setOpenNav]
  );

  return (
    <>
      <StyledDiv>
        <Column openNav={openNav}>
          <PageNav openNav={openNav} />
          <PlayListCard openNav={openNav} setOpenNav={handleCloseNav} />
        </Column>
        <ContentLayout>{<Outlet />}</ContentLayout>
      </StyledDiv>
    </>
  );
}

export default AppLayout;
