import styled, { css } from 'styled-components';

const variations = {
  transparent: css`
    background-color: hsl(0deg 0% 7.45%);
    color: var(--color-grey-100);
  `,
  clean: css`
    background-color: #fff;
    color: black;
  `,
  dark: css`
    background-color: #000;
    color: white;
  `
};

const Button = styled.button`
  color: white;
  font-family: var(--font-roboto-100);
  border: none;
  outline: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bolder;
  max-width: fit-content;
  min-height: 40px;
  min-width: 40px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.1rem;

  &:hover {
    /* background-color: #1a1a1a; */
    scale: 1.1;
  }

  ${(props) => variations[props?.variation]}
`;

Button.defaultProps = {
  size: 'small',
  variation: 'transparent'
};

export default Button;
