import React from 'react'
import { Button } from 'dope-components';
import { faUserCircle, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo, Section, Grid, Card, Input, IonCard } from '../components'

const login = (props) => {

  const Icon = ({ icon }) => {

    return <FontAwesomeIcon icon={icon} />
  }
  return (
    <Section>
      <Grid className="login" justify="center" align="center">
        <Logo />
        <IonCard>
          <Grid column>
            <Input label="username" startIcon={<Icon icon={faUserCircle} />} variant="text" onChange={e => console.log(e)} />
            <Input label="password" startIcon={<Icon icon={faKey} />} variant="password" onChange={e => console.log(e)} />
            <Button fullWidth color='red'>login</Button>
          </Grid>
        </IonCard>
      </Grid>
    </Section>
  )
}

export default login
