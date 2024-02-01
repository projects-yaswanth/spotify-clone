import styled from 'styled-components';

const StyledCircleButton = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 100px;
  display: flex;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--font-roboto-100);
  border: none;
  outline: none;
  &:hover {
    background-color: #1a1a1a;
  }
`;

function CircleButton({ children, title }) {
  return <StyledCircleButton title={title}>{children}</StyledCircleButton>;
}

export default CircleButton;
