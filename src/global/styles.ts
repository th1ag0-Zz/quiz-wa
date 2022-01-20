import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 720px) {
    * {
      font-size: 93.75%;
    }
  }

  @media (max-width: 480px) {
    * {
      font-size: 87.5%
    }
  }
`;
