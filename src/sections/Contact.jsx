import React from 'react'
import { IonCol, ContactForm } from '../components';
const Contact = ({ theme }) => {
  return (
    <IonCol size={screen.col} push={screen.size === "small" ? 0 : 1} color="primary">
      <ContactForm theme={theme} />
    </IonCol>
  )
}

export default Contact
