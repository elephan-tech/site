import React from 'react'
import { Button } from 'dope-components'
import { Typography, IonButton, IonCol, IonGrid, IonRow, Surface } from '../components'
import Graphic from '../components/Graphic'
import code from '../public/lotties/code.json'

const Landing = (props, title) => {
  const { state: { screen }, theme } = props;

  return (
    <IonGrid fixed id={title} style={{ marginTop: 50 }}>
      <IonRow class="ion-align-items-center">
        <IonCol size={screen.col} color="primary">
          <Graphic animationData={code} height="auto" width="100%" autoplay loop />
        </IonCol>
        <IonCol class="ion-align-self-end" size={screen.col}>
          <Typography variant="h1" color="primary">Lets bring your business to the next level</Typography>
          <Typography color="contrast" variant="p">
            We are a Software Development company with a focus on Progressive Web Apps.
            We enjoy taking on big data projects and deliver useful software.
            We put our main focus as a company on stakeholder satisfaction and delivery of awesome software systems
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button noMargin style={{ flexGrow: 'none', margin: '8px 0px', alignSelf: 'end' }} variant="solid" color={theme.palette.accent.main} fill="solid">Let's Talk</Button>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default Landing
