import React from 'react'
import Lottie from 'react-lottie'

const Graphic = (props) => {

  const { animationData, loop, autoplay, settings, isStopped = false, isPaused = false, height, width } = props;

  console.log({ animationData, settings, height, width })
  const options = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      ...settings
    }
  }

  console.log(options)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: {},
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      hideOnTransparent: true,
      clearCanvas: true
    }
  };

  return (
    <Lottie
      options={options || defaultOptions}
      height={height}
      width={width}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  )
}

export default Graphic
