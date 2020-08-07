import React from 'react'
import { useWindowDimensions } from '../hooks';
import { inRange as _inRange } from 'lodash';

const ResponsiveLayout = ({ children, theme }) => {

  const { width } = useWindowDimensions();

  const breakpoints = [
    { view: 'sm', from: 0, to: 500 },
    { view: 'md', from: 501, to: 1200 },
    { view: 'lg', from: 1200, to: 1440 },
    { view: 'xl', from: 1441, to: 9999 }
  ];

  const [{ view }] = breakpoints.filter(({ from, to }) => _inRange(width, from, to))

  console.log({ view })

  // return width > breakpoint ? desktop() : mobile()
  return <div style={{ height: '100%', width: '100%' }}>{children}</div>
}

export default ResponsiveLayout
