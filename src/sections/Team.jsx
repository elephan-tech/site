import React from 'react'
import Section from '../containers/Section'
import { IonGrid, IonRow, IonCol, IonText, IonCard, Center, Typography } from '../components';

const Team = (props, title) => {
  const { state: { screen }, theme } = props;

  return (
    <IonGrid fixed id={title} style={{ display: 'flex' }}>
      <IonRow>
        <IonCol size={screen.col + 3} offset="2">
          <Typography variant="h2" color="primary">About Elephantech.</Typography>
          <Typography color="contrast" variant="p">
            We are a group of young professionals with broad experience in diverse areas of IT. The company was founded in June, 2020, but it has been in the works for long before that.<br /><br />
            It all started with a group of friends who knew each other from college and rugby. We all were working in different areas in the IT field, from software engineering to User Experience. We started collaborating and consulting back in 2016 until we formed a network for sharing knowledge and advice one another.  One thing led to another, fast forward to 2020, we thought why not start our own technology company.<br /><br />
            We are very passionate about stakeholder satisfaction. We believe every aspect of a project needs to address all stakeholders, from our clients and their audience to the community we serve.<br /><br />
          </Typography>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default Team
