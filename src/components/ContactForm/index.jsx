import { Button } from 'dope-components'
import { atOutline, mailOutline, personOutline } from 'ionicons/icons'
import React, { useState, useRef } from 'react'
import {
  IonCard,
  IonIcon,
  IonInput,
  IonLabel,
  IonTextarea,
  IonItem,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonContent,
  IonCardContent,
  Card,
  Typography,
  Center,
  Input
} from '..'
import sendMail from '../../api/sendMail'


const ContactForm = ({ theme }) => {
  const { palette: { primary } } = theme;

  const fields = [
    { icon: personOutline, label: 'name', name: 'name', variant: 'text' },
    { icon: atOutline, label: 'email', name: 'email', variant: 'email' },
    { icon: mailOutline, label: 'message', name: 'message', variant: 'message' }
  ]

  const [value, setValue] = useState({ name: '', email: '', message: '' });

  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSend = () => sendMail(value)
    .then(res => setResponse(res))
    .catch(err => setError(err))

  console.log({ response, error })

  const handleChange = (e) => setValue({ ...value, [e.target.name]: e.target.value });

  const resetState = () => setValue({ name: '', email: '', message: '' });

  const handleSubmit = event => {
    event.preventDefault();
    handleSend(value);
    resetState();
  }

  console.log(value)
  const ButtonContent = () => <div>{response.status === 200 ? 'sent' : !response.status && 'submit'}</div>

  return (
    <Card style={{ background: primary.main, height: '100%' }}>
      <IonCardHeader>
        <Typography variant="h4" color="background">Hello there!</Typography>
        <Typography variant="subtitle" color="background">We want to hear from you! Drop your info below and we will get in contact about your tech needs</Typography>
      </IonCardHeader>
      <Center direction="column" style={{ background: theme.palette.background }}>
        <Card style={{ margin: 0 }}>
          {fields.map((field) => (<Input
            value={value[field.name]}
            key={field.label}
            alignStart
            startIcon={<IonIcon icon={field.icon} slot="start" />}
            label={field.label}
            name={field.name}
            variant={field.variant}
            onChange={handleChange}
          />))}
          <Button color={primary.main} type="submit" fullWidth size="large" onClick={handleSubmit}> <ButtonContent /> </Button>
        </Card>
      </Center>
    </Card >
  )
}

export default ContactForm
