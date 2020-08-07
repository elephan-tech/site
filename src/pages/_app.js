import React from 'react';
import { ThemeProvider } from 'styled-components'
import '@ionic/react/css/core.css'
import etTheme, { darkTheme } from '../theme'
import { WindowDimensions } from '../providers'

export default function MyApp({ Component, pageProps }) {
  const darkMode = false;
  const theme = darkMode ? darkTheme : etTheme
  return (
    <ThemeProvider theme={theme}>
      <WindowDimensions>
        <Component {...pageProps} theme={theme} />
      </WindowDimensions>
    </ThemeProvider>
  )
}