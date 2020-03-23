import React from "react";
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import theme from '../src/styles/theme';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.jsx?$/), module);
addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
