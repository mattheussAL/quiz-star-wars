import db from '../db.json';
import React from 'react';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

const theme = db.theme;

export default function App({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}