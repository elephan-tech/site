import React from 'react';
import { IonCol, Form, IonCardHeader, Typography, Card } from '../components';
import { atOutline, mailOutline, personOutline } from 'ionicons/icons';

const Contact = () => {

  const fields = [
    { icon: personOutline, label: 'name', name: 'name', type: 'text' },
    { icon: atOutline, label: 'email', name: 'email', type: 'email' },
    { icon: mailOutline, label: 'message', name: 'message', type: 'message' }
  ];

  return (<>
    <IonCol size={screen.col} push={screen.size === 'small' ? 0 : 1} color="primary">
      <Card color="primary" style={{ height: '100%' }}>
        <IonCardHeader>
          <Typography variant="h4" color="background">Hello there!</Typography>
          <Typography variant="subtitle" color="background">We want to hear from you! Drop your info below and we will get in contact about your tech needs</Typography>
        </IonCardHeader>
        <Card noMargin fullWidth>
          <Form fields={fields} />
        </Card>
      </Card >
    </IonCol>
  </>
  );
};


export default Contact;
