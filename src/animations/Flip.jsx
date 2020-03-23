import { useSpring } from 'react-spring'
import { animated } from 'react-spring'


export const getFlipAnimation = (flipped) => useSpring({
  opacity: flipped ? 1 : 0,
  transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  config: { mass: 5, tension: 500, friction: 80 }
})

export const Flip = ({ front, back, flip }) => {

  const { opacity, transform } = getFlipAnimation(flip);

  const backStyles = {
    opacity: opacity.interpolate(o => 1 - o),
    transform
  }

  const frontStyles = {
    opacity,
    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
  }

  return <animated.div style={flip ? backStyles : frontStyles}>{flip ? back : front}</animated.div>

}

export default Flip