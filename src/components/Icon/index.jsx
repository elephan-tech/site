import React from 'react'

export const Svg = ({ color = "#000", paths = [], stroke = 16, outline = true }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
      {paths.map(({ d }) => (
        <path d={d} style={{
          fill: outline ? 'none' : `${color}50`,
          stroke: color,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: `${stroke}px`
        }} />
      ))}
    </svg>

  )
}

export default Svg
