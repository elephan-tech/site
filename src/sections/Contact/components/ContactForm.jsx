import React, { useState } from 'react'
import { Button } from 'dope-components'
import {
  Grid,
  Input,
  Card
} from '../../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import sendMail from '../../../api/sendMail'


const ContactForm = ({ theme }) => {
  const { palette: { primary } } = theme;

  const [formData, setFormData] = useState({})

  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  const handleSend = () => {
    console.log(formData)
    sendMail(formData)
      .then(res => setResponse(res))
      .catch(err => setError(err))
  }


  const handleChange = e => {
    console.log({ gooo: e.target.name })
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
    handleSend();
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const ButtonContent = () => <div>{response.status === 200 ? 'sent' : !response.status && 'submit'}</div>

  return (
    <Card noMargin>
      <Grid row noMargin>
        <Input
          alignStart
          startIcon={<FontAwesomeIcon icon={faUser} />}
          label="name"
          name="name"
          variant="text"
          onChange={handleChange}
        />
      </Grid>
      <Grid row noMargin>
        <Input
          alignStart
          startIcon={<FontAwesomeIcon icon={faAt} />}
          label="email"
          name="email"
          variant="email"
          onChange={handleChange}

        />
      </Grid>
      <Grid row noMargin>
        <Input
          alignStart
          startIcon={<FontAwesomeIcon icon={faEnvelope} />}
          label="message"
          name="message"
          variant="message"
          onChange={handleChange}
        />
      </Grid>
      <Grid noMargin>
        <Button color={primary.main} fullWidth size="large" onClick={handleSubmit}> <ButtonContent /> </Button>
      </Grid>
    </Card>
  )
}

export default ContactForm
