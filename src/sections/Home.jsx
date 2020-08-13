import React from 'react'
import { Button } from 'dope-components'
import { Typography, Center, IonCol, IonGrid, IonRow, Surface } from '../components'
import Graphic from '../components/Graphic'
import code from '../public/lotties/code.json'

const Landing = (props, title) => {
  const { state: { screen }, theme } = props;

  const lottieSettings = {
    viewBoxSize: '100 0 750 900'
  };

  return (
    <>
      <IonCol class="align-self-center" size={screen.col} color="primary">
        <Graphic
          animationData={code}
          height="100%"
          width="500px"
          autoplay
          loop
          settings={lottieSettings}
        />
      </IonCol>
      <IonCol class="ion-align-self-center" size={screen.col}>
        <Typography variant="h1" color="primary">Lets bring your business to the next level</Typography>
        <Typography color="contrast" variant="p">
          We are a Software Development company with a focus on Progressive Web Apps.
          We enjoy taking on big data projects and deliver useful software.
          We put our main focus as a company on stakeholder satisfaction and delivery of awesome software systems
          </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            noMargin
            style={{ flexGrow: 'none', margin: '8px 0px', alignSelf: 'end' }}
            variant="solid"
            color={theme.palette.accent.main}
            size="large"
          >
            Let's Talk
            </Button>
        </div>
      </IonCol>
    </>
  )
}

export default Landing
