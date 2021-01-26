
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body { min-height: 100vh }

  body {
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #000a24e8;
    }
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
