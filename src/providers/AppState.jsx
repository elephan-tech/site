import React from 'react';
import { inRange } from 'lodash';

export const context = React.createContext({});

const getScreenInfo = (payload) => {
  const breakpoints = [
    { from: 320, to: 426, device: 'phone', col: 12, size: 'small' },
    { from: 426, to: 1025, device: 'tablet', col: 12, size: 'small' },
    { from: 1025, to: 1441, device: 'laptop', col: 6, size: 'big' },
    { from: 1441, to: 2560, device: 'tv', col: 6, size: 'big' }
  ];

  return breakpoints.reduce((acc, { from, to, device, col, size }) => {
    const info = inRange(payload, from, to) ? { size, device, col, px: payload } : {}
    return { ...acc, ...info }
  }, {});

}

export const reducer = (state, { type, payload }) => {
  console.log({ type, payload })
  switch (type) {
    case "TOGGLE_DARK_MODE":
      console.log(state.dark)
      return { ...state, dark: !state.dark }
    case "SET_DIMENSION":
      const screen = getScreenInfo(payload);
      return { ...state, screen }
    default:
      return state;
  }
}

export const initialState = {
  dark: false,
  screen: {
    size: 'big',
    device: 'laptop',
    col: 6,
    px: 1440
  }
};

