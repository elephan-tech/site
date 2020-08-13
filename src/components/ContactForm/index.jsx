import React, { useState } from 'react'
import { Button } from 'dope-components'
import { atOutline, mailOutline, personOutline } from 'ionicons/icons'
import {
  Card,
  Center,
  Input,
  IonCardHeader,
  IonIcon,
  Typography
} from '..'
import sendEmail from '../../api/sendMail'


const ContactForm = ({ theme }) => {
  const { palette: { primary, accent } } = theme;

  const fields = [
    { icon: personOutline, label: 'name', name: 'name', variant: 'text' },
    { icon: atOutline, label: 'email', name: 'email', variant: 'email' },
    { icon: mailOutline, label: 'message', name: 'message', variant: 'message' }
  ]

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const resetState = () => setValue({ name: '', email: '', message: '' });

  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    resetState()
  }

  const ButtonContent = () => <div>{response.status === 200 ? 'sent' : !response.status && 'submit'}</div>

  return (
    <Card style={{ background: primary.main, height: '100%' }}>
      <IonCardHeader>
        <Typography variant="h4" color="background">Hello there!</Typography>
        <Typography variant="subtitle" color="background">We want to hear from you! Drop your info below and we will get in contact about your tech needs</Typography>
      </IonCardHeader>
      <Center direction="column" style={{ background: theme.palette.background }}>
        <Card noMargin fullWidth>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <Input
                value={formData[field.name]}
                key={field.label}
                alignStart
                startIcon={<IonIcon icon={field.icon} slot="start" />}
                label={field.label}
                name={field.name}
                variant={field.variant}
                onChange={handleChange}
              />
            ))}
            <Button style={{ margin: 0 }} color={accent.main} type="submit" fullWidth size="large">
              <ButtonContent />
            </Button>
          </form>
        </Card>
      </Center>
    </Card >
  )
}

export default ContactForm
