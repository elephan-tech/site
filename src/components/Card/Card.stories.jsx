import React, { useRef } from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWeightHanging, faWheelchair, faUser, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import Card from './index';
import Grid from '../Grid';
import Flip from '../../animations/Flip';
import elephantech from '../../public/etLogo.svg';

const Fliparoo = () => {
  const flipRef = useRef(false);
  const handleClick = () => { flipRef.current = !flipRef };
  return <Flip onClick={handleClick} front={<Card>Elephant🐘</Card>} back={<Card>Tech💻</Card>}></Flip>
}

const stories = storiesOf('Card', module).addDecorator((Fliparoo) => <Fliparoo />);
const icons = [faCoffee, faWeightHanging, faWheelchair, faUser, faAt, faPhone];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

stories
  .add('Empty Card', () => <Card />)
  .add('With Emojis', () => <Card>🐘💻</Card>)
  .add('With Icons', () => (<Card round style={{ background: 'black' }}>
    <Grid>
      {icons.map((icon, i) => <Grid row><FontAwesomeIcon style={{ color: colors[i] }} icon={icon} /></Grid>)}
    </Grid>
  </Card>))
  .add('Round', () => <Card round alignText='center'>🐘💻</Card>)
  .add('Custom Styles', () => (
    <Card style={{
      backgroundImage: `url(${elephantech})`,
      backgroundRepeat: 'no-repeat',
      color: 'red',
      textTransform: 'uppercase',
      fontWeight: '900',
      width: '420px',
      height: '420px',
      fontSize: '69px'
    }}
      round
      alignText='center'
    >
      🐘 I'm custom
    </Card>))
  .add('Grid', () => (
    <Grid justify="space-evenly">
      <Grid row>
        <Card round fullWidth></Card>
        <Card round fullWidth></Card>
      </Grid>
      <Grid row>
        <Card round></Card>
        <Card round fullWidth></Card>
      </Grid>
      <Grid row>
        <Card round></Card>
        <Card round fullWidth></Card>
        <Card round ></Card>
      </Grid>
      <Grid row>
        <Card fullWidth></Card>
      </Grid>
    </Grid>
  ))
  .add('With Flip', () => <Fliparoo />)
  .add('As button', () => {
    const handleClick = () => console.log('clicked')
    return (
      <Card onClick={handleClick}>
        As button
      </Card>)
  })
