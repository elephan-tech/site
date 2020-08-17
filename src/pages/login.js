import React from 'react';
import { Button } from 'dope-components';
import { Logo, Grid, Input, IonCard, IonIcon } from '../components';
import { keyOutline, personCircle } from 'ionicons/icons';
import { Section } from '../containers';

const Login = () => {

  return (
    <Section>
      <Grid className="login" justify="center" align="center">
        <Logo />
        <IonCard>
          <Grid column>
            <Input label="username" startIcon={<IonIcon icon={personCircle} />} type="text" onChange={e => console.log(e)} />
            <Input label="password" startIcon={<IonIcon icon={keyOutline} />} type="password" onChange={e => console.log(e)} />
            <Button fullWidth color='red'>login</Button>
          </Grid>
        </IonCard>
      </Grid>
    </Section>
  );
};

export default Login;
