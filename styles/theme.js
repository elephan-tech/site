const theme = {
  font:{
    size: '14px',
    family: 'Futura, sans-serif',
  },
  palette: {
    primary: {
      main: '#357081',
      light: '#659eb0',
      dark: '#004554'
    },
    secondary: {
      main: '#C4C4C4',
      light: '#f7f7f7',
      dark: '#949494',
    },
    accent: {
      main: '#65AD8F',
      light: '#96dfbf',
      dark: '#357d62'
    },
    black: '#000000',
    white: '#ffffff',
    warning: '#EDC73F',
    error: '#E70A0A',
    success: '#64B215',
    info: '#23b4bd'
  },
  dimensions: {
    maxWidth: '1000px',
  },
  breakpoints: {

  }
}

export const darkTheme = {
  ...theme,
  palette: {
    primary: {
      main: '#263238',
      light: '#4f5b62',
      dark: '#000a12'
    },
    secondary: {
      main: '#004554',
      light: '#3a7080',
      dark: '#001e2b',
    },
    black: '#000000',
    white: '#ffffff',
  },
  warning: '#fffa72',
  error: '#ff5739',
  success: '#98e54f',
  info: '#68e7ef'
}

export default theme