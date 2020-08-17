import React from 'react';
import Lottie from 'react-lottie';
import Center from '../Center';
import { any, bool, object, string } from 'prop-types';

const Graphic = (props) => {

  const { animationData,
    loop,
    autoplay,
    settings,
    isStopped = false,
    isPaused = false,
    height,
    width
  } = props;

  const options = {
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      ...settings
    }
  };

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
    <Center style={{ padding: 8 }}>
      <Lottie
        options={options || defaultOptions}
        height={height}
        width={width}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </Center>
  );
};

Graphic.propTypes = {
  animationData: any,
  loop: bool,
  autoplay: bool,
  settings: object,
  isStopped: bool,
  isPaused: bool,
  height: string,
  width: string
};

export default Graphic;
