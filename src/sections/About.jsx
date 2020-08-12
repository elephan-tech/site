import React from 'react'
import { Button } from 'dope-components'
import { Typography, IonButton, IonCol, IonGrid, IonRow, Center, IonItem } from '../components'
import Graphic from '../components/Graphic'
import code from '../public/lotties/code.json'
import ContactForm from '../components/ContactForm';

const About = (props, title) => {
  const { state: { screen }, theme } = props;

  const services = [
    { emoji: '🔥', title: 'Software Development', content: 'We develop software tailored to your needs. Whether your business requires data processing, content management or a web application, Elephantech can take care of it.' },
    { emoji: '💻', title: 'Progressive Web Apps', content: 'Have a cross-platform application that will do everything and will work with no restriction on any device' },
    { emoji: '📱', title: 'Native Mobile', content: 'Have your highly functional native app available on the app stores' },
    { emoji: '🛒', title: 'E-Commerce', content: 'Sell from your PWA, your Native App or from just your website. We will custom-build your E-commerce needs and make it easier for your clients to do business with you.' },
  ]

  return (
    <IonGrid fixed id={title} style={{ marginTop: 50 }}>
      <IonRow class="ion-align-items-center">
        <IonCol class="ion-align-self-end" size={screen.col}>
          <Typography variant="h2" color="primary">Our Services</Typography>
          <Center direction="column">
            {services.map(({ emoji, title, content }) => (
              <>
                <Typography variant="h5" color="primary">{`${emoji} ${title}`}</Typography>
                <Typography variant="p" color="secondary" shade="dark">{content}</Typography>
              </>
            ))}
          </Center>
        </IonCol>
        <IonCol size={screen.col - 1} push="1" color="primary">
          <ContactForm theme={theme} />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default About
