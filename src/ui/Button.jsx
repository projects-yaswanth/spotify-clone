import styled, { css } from 'styled-components';

const Button = styled.button`
  color: black;
  font-family: var(--font-roboto-100);
  font-weight: bolder;
  border: none;
  outline: none;

  ${(props) => {
    if (props.color === 'white')
      css`
        background-color: #fff;
        height: 3rem;
      `;
  }}
`;

Button.defaultProps = {
  bgColor: 'black'
};

export default Button;
