import { render } from 'react-dom'
import React, { useState } from 'react'
import { animated } from 'react-spring'
import Flip from '../animations/Flip'

const Card = ({ front, back }) => {

  const [flip, setFlip] = useState(true)
  const { opacity, transform } = Flip(flip);

  const toggleFlip = () => setFlip(!flip)

  const backStyles = {
    opacity: opacity.interpolate(o => 1 - o),
    transform
  }

  const frontStyles = {
    opacity,
    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
  }

  return (
    <div className="card-container" onClick={toggleFlip}>
      <animated.div className="card back" style={backStyles}>{back}</animated.div>
      <animated.div className="card front" style={frontStyles}>{front}</animated.div>
    </div>
  )
};

export default Card