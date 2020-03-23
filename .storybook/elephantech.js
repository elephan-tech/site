import { create } from '@storybook/theming/create';
import theme from '../src/styles/theme';
import logo from '../src/public/etLogo.svg';

export default create({
  base: 'dark',

  colorPrimary: theme.palette.primary.main,
  colorSecondary: theme.palette.secondary.main,

  // UI
  appBg: theme.palette.primary.dark,
  appContentBg: theme.palette.white,
  appBorderColor: theme.palette.primary.light,
  appBorderRadius: 4,

  // Typography
  fontBase: theme.font.family,
  fontCode: 'monospace',

  // Text colors
  textColor: theme.palette.secondary.light,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: theme.palette.black,
  barSelectedColor: 'black',
  barBg: theme.palette.primary.light,

  // Form colors
  inputBg: theme.palette.primary.dark,
  inputBorder: theme.palette.primary.light,
  inputTextColor: theme.palette.white,
  inputBorderRadius: 4,

  brandTitle: 'ElephanTech',
  brandUrl: 'https://elephan.tech',
  brandImage: logo,
});