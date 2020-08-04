import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { theme, darkTheme } from '../styles/theme'

export default ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // prevents ssr flash for mismatched dark mode
  const style = mounted ? {} : { visibility: 'hidden' }

  return (
    <div style={style}>
      <ThemeProvider theme={value ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </div>
  )

}