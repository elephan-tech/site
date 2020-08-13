import React from 'react'
import Flex from './Flex'

const Center = ({ children, direction }) => {
  return (
    <div style={{ display: 'flex', flexDirection: direction, margin: '16px 8px' }}>
      <Flex />
      <div>{children}</div>
      <Flex />
    </div>
  )
}

export default Center
