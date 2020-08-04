import React from 'react';
import { ThemeProvider } from 'styled-components'
import etTheme, { darkTheme } from '../theme'

export default function MyApp({ Component, pageProps }) {
  const darkMode = false;
  const theme = darkMode ? darkTheme : etTheme
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  )
}