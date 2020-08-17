import React, { useState } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { Center, Graphic, IonCol, Title, Typography, Input, IonButton, IonIcon } from '../components';
import { atOutline } from 'ionicons/icons';
import code from '../public/lotties/code.json';


const EmailCapture = () => {

  const [userEmail, setUserEmail] = useState('');
  const handleEmail = (e) => setUserEmail(e.target.value);
  const addContact = (e) => console.log('adding contact', e.currentTarget, userEmail);

  return (
    <Input
      placeholder="email@business.com"
      startIcon={<IonButton fill="clear" mode="ios" slot="icon-only"><IonIcon icon={atOutline} /></IonButton>}
      value={userEmail}
      onChange={handleEmail}
      type="email"
      action={addContact}
      actionLabel="Let's Talk"
      alignStart
    />
  );
};

const Home = (props) => {

  const { state: { screen } } = props;

  const lottieSettings = {
    viewBoxSize: '200 0 750 900'
  };

  const StyledCol = styled(IonCol)`
  display: flex;
  align-self: center;
  flex-direction: ${screen === 'small' ? 'column' : 'row'};
  `;

  return (
    <>
      <StyledCol>
        <Graphic
          animationData={code}
          height="500px"
          width="500px"
          autoplay
          settings={lottieSettings}
        />
        <Center direction="column" style={{ width: '100%' }}>
          <Title>Lets bring your business to the next level</Title>
          <Typography color="contrast" variant="p">
            We are a Software Development company with a focus on Progressive Web Apps.
            We enjoy taking on big data projects and deliver useful software.
            We put our main focus as a company on stakeholder satisfaction and delivery of awesome software systems
          </Typography>
          <EmailCapture />
        </Center>
      </StyledCol>
    </>
  );
};

Home.propTypes = {
  state: object,
  theme: object
};

export default Home;
