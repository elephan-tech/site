const getShadow = (v, color) => `5px ${v ? (v * 10) : 10}px 10px 0px ${color}50`

const theme = (dark) => ({
  unit: (size) => `${size ? (size * 8) : 8}px`,
  font: {
    size: {
      small: '9px',
      medium: '11px',
      main: '14px',
      big: '18px',
      bigger: '24px',
      giant: '30px'
    },
    family: 'Futura, sans-serif',
  },
  palette: {
    primary: {
      main: !dark ? '#357081' : '#C4C4C4',
      light: !dark ? '#659eb0' : '#4f5b62',
      dark: !dark ? '#004554' : '#000a12'
    },
    secondary: {
      main: !dark ? '#C4C4C4' : '#004554',
      light: !dark ? '#f7f7f7' : '#3a7080',
      dark: !dark ? '#4f5b62' : '#357081',
    },
    accent: {
      main: !dark ? '#65AD8F' : '#23b4bd',
      light: !dark ? '#96dfbf' : '#659eb0',
      dark: !dark ? '#357d62' : '#004554'
    },
    glow: {
      contrast: getShadow(1, !dark ? '#C4C4C4' : '#23b4bd'),
      primary: getShadow(1, !dark ? '#23b4bd' : '#4f5b62')
    },
    contrast: !dark ? '#231f20' : '#23b4bd',
    white: '#ffffff',
    background: !dark ? '#ffffff' : '#263238'
  },
  warning: '#EDC73F',
  error: '#E70A0A',
  success: '#64B215',
  info: '#23b4bd',
  shadow: (v) => getShadow(v, !dark ? '#949494' : '#4f5b62')
});

export default theme