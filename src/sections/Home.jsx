import React from 'react'
import { Section, Grid, Typography } from '../components'
import Graphic from '../components/Graphic'
import programming from '../lotties/programming.json'
import ContactForm from './Contact/components/ContactForm'

const Landing = (props) => {
  return (
    <Section>
      <Grid row>
        <Grid spacing={1} itemSpacing='space-between'>
          <Typography color="primary" variant="h1">Hello there,</Typography>
          <Typography variant="body">we are working hard to build Elephantech's home... <br /> big things coming soon 😉</Typography>
          <Typography variant="subtitle">In the mean time feel free to leave us a message and well get back to you</Typography>
          <ContactForm theme={props && props.theme} />
        </Grid>
        <Grid noFlex>
          <Graphic
            animationData={programming}
            autoplay
            loop
          />
        </Grid>
      </Grid>
    </Section>
  )
}

export default Landing
