import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import styled from 'styled-components';


const Expand = ({ open, Component }) => {

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '10%', background: 'hotpink' },
    to: { size: open ? '100%' : '10%', background: open ? 'white' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? [] : [], item => item.name, {})

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <>
      <Component style={{ ...rest, width: size, height: size }} onClick={() => set(!open)}>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }} />
        ))}
      </Component>
    </>
  )
}

export default Expand
