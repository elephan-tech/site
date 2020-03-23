import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWeightHanging, faWheelchair, faUser, faAt, faPhone, faNumbers, faLetters } from '@fortawesome/free-solid-svg-icons'
import Input from '.';
import Grid from '../Grid';
import Logo from '../Logo'

storiesOf('Input', module)
  .add('Name Input', () => <Input label="Name" placeholder="Pablo" variant="text" errorMessage="Invalid Name" onChange={(e) => console.log(e.target.value)} />)
  .add('with placeholder', () => <Input variant="text" startIcon={<FontAwesomeIcon icon={faCoffee} />} label="Name" placeholder="coffee?" onChange={(e) => console.log(e.target.value)} />)
  .add('with start icon', () => <Input variant="numberd" startIcon={<FontAwesomeIcon icon={faWeightHanging} />} label="Weight" endIcon="kg" onChange={(e) => console.log(e.target.value)} />)
  .add('with end icon', () => <Input variant="text" endIcon={"$"} label="Name" onChange={(e) => console.log(e.target.value)} />)
  .add('two inputs', () => (
    <>
      <Input variant="text" onChange={(e) => console.log(e.target.value)} startIcon={<FontAwesomeIcon icon={faUser} />} label="Name" />
      <Input borderless onChange={(e) => console.log(e.target.value)} variant="text" startIcon={<Logo />} label="Last" />
    </>
  ))
  .add('with everything', () => (
    <Input
      startIcon={"$"}
      label="How much cash you got"
      placeholder="69"
      variant="number"
      hint="Tell me how much money it is"
      onChange={(e) => console.log(e.target.value)}
    />))
  .add('Contact Form', () => (
    <Grid column>
      <Grid row>
        <Input label="name" variant="text" startIcon={<FontAwesomeIcon icon={faUser} onChange={e => console.log(e.target)} />} />
      </Grid>
      <Grid row>
        <Input label="last" variant="text" startIcon={<FontAwesomeIcon icon={faUser} onChange={e => console.log(e.target)} />} />
      </Grid>

      <Grid row>
        <Input label="email" variant="email" startIcon={<FontAwesomeIcon icon={faAt} onChange={e => console.log(e.target)} />} />
      </Grid>
      <Grid row>
        <Input label="phone number" variant="tel" startIcon={<FontAwesomeIcon icon={faPhone} onChange={e => console.log(e.target)} />} />
      </Grid>
    </Grid>
  ))
  .add('Input/Check Validation', () => {
    return (
      <>
        <Input
          label="Text only"
          // startIcon={<FontAwesomeIcon icon={faLetters}/>}
          placeholder="Text Input"
          errorMessage="Custom error message: text only bitch"
          onChange={e => console.log(e.target.value)}
          variant="Text"
        />
        <Input
          label="Numbers only"
          // startIcon={<FontAwesomeIcon icon={faNumbers}/>}
          placeholder="Numbner Input"
          errorMessage="Custom error message: numbers only bitch"
          onChange={e => console.log(e.target.value)}
          variant="Number"
        />
      </>
    )

  })

