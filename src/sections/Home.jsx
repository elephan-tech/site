import React from 'react'
import { Section, Grid, Typography } from '../components'
import Graphic from '../components/Graphic'
import programming from '../lotties/programming.json'
import ContactForm from './Contact/components/ContactForm'

const Landing = (props) => {
  console.log(props)
  return (
    <Grid>
      <Grid spacing={1} itemSpacing='space-between'>
        <Typography color="primary" variant="h1">Hello there,</Typography>
        <Typography variant="body">we are working hard to build Elephantech's home... <br /> big things coming soon 😉</Typography>
        <Typography variant="subtitle">In the mean time feel free to leave us a message and well get back to you</Typography>
        <Graphic
          animationData={programming}
          autoplay
          loop
        />
      </Grid>
      <Grid spacing={1}>
        <ContactForm theme={props && props.theme} />
      </Grid>
      <Grid spacing={1}>

      </Grid>
    </Grid>
  )
}

export default Landing
