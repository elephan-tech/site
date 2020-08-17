import React from 'react';
import { Section, Typography, Grid, Page, IonCard } from '../components';
import { Button } from 'dope-components';

const admin = ({ user }) => {
  return (
    <Page admin>
      <Section>
        <Typography>{user || 'Admin'}</Typography>
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
