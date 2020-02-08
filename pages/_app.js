import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme, { darkTheme } from '../styles/theme'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  const darkMode = false;
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}