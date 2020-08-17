import React from 'react';
import { Typography, Grid, IonCard } from '../components';
import { Page, Section } from '../containers';
import { Button } from 'dope-components';

const admin = (props) => {
  return (
    <Page {...props}>
      <Section>
        <Typography>{props.user || 'Admin'}</Typography>
        <Grid row>
          <Grid column>
            <IonCard round>
              <Button size="large" variant="text">start job</Button>
            </IonCard>
          </Grid>
          <Grid column>
            hello
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default admin;
