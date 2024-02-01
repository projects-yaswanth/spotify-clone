import { AiFillBoxPlot, AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import CircleButton from './CircleButton';

const PlayList = styled.div`
  background-color: #121212;
  border-radius: 10px;
  flex-basis: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PlayListHeader = styled.div`
  color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
`;

const Heading = styled.div`
  font-size: 2rem;
  display: flex;
  gap: 1rem;
  cursor: pointer;

  & span {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  -webkit-user-select: none;
  user-select: none;

  &:hover {
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

function PlayListCard({ openNav, setOpenNav }) {
  return (
    <PlayList>
      <PlayListHeader style={openNav ? { flexDirection: 'column', gap: '2rem' } : {}}>
        <Heading>
          <AiFillBoxPlot onClick={() => setOpenNav()} />
          {!openNav && <span onClick={() => setOpenNav()}>Your Library</span>}
        </Heading>
        {!openNav ? (
          <ButtonGroup>
            <CircleButton title="Create Playlist or folder">
              <AiOutlinePlus />
            </CircleButton>
            <CircleButton title="Show more">
              <AiOutlineArrowRight />
            </CircleButton>
          </ButtonGroup>
        ) : (
          <CircleButton>
            <AiOutlinePlus />
          </CircleButton>
        )}
      </PlayListHeader>
      {!openNav && <h1>Hell</h1>}
    </PlayList>
  );
}

export default PlayListCard;
