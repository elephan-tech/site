import React from 'react'
import { Section, Typography, Grid, Card, Page } from '../components'
import { Button } from 'dope-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const admin = ({ user }) => {
  return (
    <Page admin>
      <Section>
        <Typography>{user || 'Admin'}</Typography>
        <Grid row>
          <Grid column>
            <Card round>
              <Button size="large" variant="text">start job</Button>
            </Card>
          </Grid>
          <Grid column>
            hello
          </Grid>
        </Grid>
      </Section>
    </Page>
  )
}

export default admin
