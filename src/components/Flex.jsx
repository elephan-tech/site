import React from 'react'

const Flex = ({ children }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      {children}
    </div>
  )
}

export default Flex
