import React, { useContext } from 'react'
import { WindowDimensionsContext } from '../providers/WindowDimensions';

const useWindowDimensions = () => console.log({ WindowDimensionsContext }) || useContext(WindowDimensionsContext);

export default useWindowDimensions;