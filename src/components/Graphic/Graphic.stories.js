import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import Graphic from './index';
import Surface from '../Surface';
import * as animationData from '../../lotties/working.json'

storiesOf('Graphic', module)
  .add('dafault', () => <Surface><Graphic animationData={animationData} /></Surface>)
  .add('controlled', ()=> {
    const pause = () => 
  })
