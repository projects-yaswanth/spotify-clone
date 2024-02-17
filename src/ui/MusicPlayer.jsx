// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';

const MusicPlayerDiv = styled.div`
  height: 12rem;
  width: 10rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10%;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  ${(props) =>
    props.$imageUrl &&
    css`
      background-image: url(${props.$imageUrl});
    `}
`;

const Card = styled.div`
  height: 18rem;
  width: 11rem;
  background-color: hsl(0deg 0% 7.06%);
  padding: 12px 8px;
  margin: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  gap: 10px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #a7a7a733;
  }
  &:hover {
    & Button {
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 0.2s ease-in-out,
        transform 0.2s ease-in-out;
    }
  }
`;

// Button component remains unchanged
const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  background-color: #84e43f;
  z-index: 100;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  position: absolute;
  bottom: 30px;
  right: 20px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: inherit;
  padding-left: 20px;

  & h1 {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  & h3 {
    color: #ffffff9a;
  }
`;

const MusicPlayer = ({ songUrl, imageUrl, name }) => {
  const [playState, setPlayState] = useState(true);
  const musicPlayer = useRef(null);

  useEffect(() => {
    musicPlayer?.current?.load();
  }, [songUrl]);

  function handlePlayState() {
    if (musicPlayer.current) {
      if (playState) {
        musicPlayer.current.play();
      } else {
        musicPlayer.current.pause();
      }
      setPlayState(!playState);
    }
  }

  return (
    <>
      <audio ref={musicPlayer}>
        <source src={songUrl} type="audio/mp3" />
      </audio>
      <Card>
        <MusicPlayerDiv $imageUrl={imageUrl}></MusicPlayerDiv>
        <TextBox>
          <h1>{name.split(' ').slice(0, 2).join(' ')}</h1>
          <h3>By Spotify</h3>
          <Button onClick={handlePlayState}>
            {playState ? (
              <BsFillPlayFill style={{ color: 'black', fontSize: '1.5rem' }} />
            ) : (
              <BsFillPauseFill style={{ color: 'black', fontSize: '1.2rem' }} />
            )}
          </Button>
        </TextBox>
      </Card>
    </>
  );
};

export default MusicPlayer;
