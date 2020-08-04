import React from 'react'
import Lottie from 'react-lottie'

const Graphic = (props) => {

  const { animationData, loop, autoplay, settings, isStopped = false, isPaused = false } = props;

  const options = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      ...settings
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: {},
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie
      options={options || defaultOptions}
      height={400}
      width={400}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  )
}

export default Graphic
