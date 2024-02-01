import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-roboto-100:  'Mukta', sans-serif;
    
    --color-grey-bgc : #121212;
    --color-grey-100 : hsl(0deg 0% 70.2%)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body,
  html {
    background-color: #000;
    color: white;
}

`;

export default GlobalStyles;
