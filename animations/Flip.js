import { useSpring } from 'react-spring'

export default (flipped) => useSpring({
  opacity: flipped ? 1 : 0,
  transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  config: { mass: 5, tension: 500, friction: 80 }
})
