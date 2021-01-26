import db from '../db.json';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = db.theme;

export default function App({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}