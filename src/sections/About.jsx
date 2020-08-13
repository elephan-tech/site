import React from 'react'
import { Button } from 'dope-components'
import { Typography, Card, IonCol, IonGrid, IonRow, Center, IonItem, IonIcon } from '../components'
import {
  flameOutline,
  laptopOutline,
  phonePortraitOutline,
  cartOutline
} from 'ionicons/icons';
import flame from '../public/icons/flame-outline.svg';
import Graphic from '../components/Graphic'
import code from '../public/lotties/code.json'
import ContactForm from '../components/ContactForm';
import Svg from '../components/Icon';

const About = (props, title) => {
  const { state: { screen }, theme } = props;

  const flame = <Svg
    color={theme.palette.secondary.dark}
    paths={[{ d: 'M112,320c0-93,124-165,96-272,66,0,192,96,192,272a144,144,0,0,1-288,0Z' }, { d: 'M320,368c0,57.71-32,80-64,80s-64-22.29-64-80,40-86,32-128C266,240,320,310.29,320,368Z' }]}
    outline
  ></Svg>

  const services = [
    { image: flame, title: 'Software Development', content: 'We develop software tailored to your needs. Whether your business requires data processing, content management or a web application, Elephantech can take care of it.' },
    { image: laptopOutline, title: 'Progressive Web Apps', content: 'Have a cross-platform application that will do everything and will work with no restriction on any device' },
    { image: phonePortraitOutline, title: 'Native Mobile', content: 'Have your highly functional native app available on the app stores' },
    { image: cartOutline, title: 'E-Commerce', content: 'Sell from your PWA, your Native App or from just your website. We will custom-build your E-commerce needs and make it easier for your clients to do business with you.' },
  ]

  return (
    <>
      <IonCol class="ion-align-self-end">
        <Typography variant="h2" color="primary">Services that bring your business ...</Typography>
        <IonRow>
          {services.map(({ image, title, content }) => (
            <IonCol key={`about-${title}`}>
              <Card id={title} theme={theme} cardImage={image} style={{ minHeigth: '70%', flexBasis: `${100 / services.length}% -${100 / services.length}px` }}>
                <IonGrid>
                  <IonRow>
                    <Typography variant="h5" color="primary">{title}</Typography>
                  </IonRow>
                  <IonRow>
                    <Typography variant="p" color="secondary" shade="dark">{content}</Typography>
                  </IonRow>
                </IonGrid>
              </Card>
            </IonCol>
          ))}
        </IonRow>
      </IonCol>
    </>
  )
}

export default About
