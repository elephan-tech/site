import React from 'react';
import { logoPwa } from 'ionicons/icons';
import { Card, IonCol, IonRow, Title, Typography } from '../components';
import applications from '../public/icons/svg/applications.svg';
import ecommerce from '../public/icons/svg/ecommerce.svg';
import intelligent from '../public/icons/svg/intelligent.svg';
import { object } from 'prop-types';

const About = (props) => {
  const { state: { screen } } = props;

  const services = [
    { image: intelligent, title: 'Software Development', content: 'We develop software tailored to your needs.' },
    { image: logoPwa, title: 'Progressive Web Apps', content: 'Cross-platform applications that will work on any device.' },
    { image: applications, title: 'Native Mobile', content: 'Highly functional native app available on the app stores.' },
    { image: ecommerce, title: 'E-Commerce', content: 'Power up your business with custom-built e-commerce.' },
  ];

  return (
    <>
      <IonCol class="ion-align-self-end">
        <Title subtitle="Our services">Online </Title>
        <IonRow>
          {services.map(({ image, title, content }) => (
            <IonCol key={`about-${title}`} size={screen.size === 'small' ? 12 : Math.floor(12 / services.length)}>
              <Card
                screen={screen}
                id={title}
                cardImage={image}
                style={{ flexBasis: `${100 / services.length}% -${100 / services.length}px` }}
              >
                <Typography variant="h5" color="primary" align="center">{title}</Typography>
                <Typography noMargin variant="h6" color="secondary" align="center">{content}</Typography>
              </Card>
            </IonCol>
          ))}
        </IonRow>
        <div>Icons made by <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

      </IonCol>
    </>
  );
};

About.propTypes = {
  state: object,
};

export default About;
