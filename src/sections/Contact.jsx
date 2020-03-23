import React from 'react'
import {
  Section,
  Grid,
  Card
} from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input'

const Contact = () => {

  const NameIcon = () => <FontAwesomeIcon icon={faUser} />

  const handleChange = (e) => console.log(e.target)

  return (
    <Section title="Contact">
      <Card>
        <Grid row>
          <Grid spacing={1}>
            <Grid row>Lets Connect</Grid>
            <Grid row>
              <Input
                startIcon={<NameIcon />}
                label="name"
                placeholder="Luke"
                variant="text"
                onChange={handleChange}
              />
              <Input
                label="last"
                placeholder="Skywalker"
                variant="text"
                startIcon={<FontAwesomeIcon icon={faUser} />}
                onChange={handleChange}

              />
            </Grid>
            <Grid row>
              <Input
                startIcon={<FontAwesomeIcon icon={faUser} />}
                label="email"
                variant="email"
                onChange={handleChange}

              />
            </Grid>
            <Grid row>
              <Input
                startIcon={<FontAwesomeIcon icon={faPhone} />}
                label="phone"
                variant="tel"
                onChange={handleChange}

              />
            </Grid>
            <Grid row>
              <Input
                startIcon={<FontAwesomeIcon icon={faEnvelope} />}
                label="message"
                variant="text"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Section>
  )
}

export default Contact
