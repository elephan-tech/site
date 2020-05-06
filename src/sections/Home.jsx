import React from 'react'
import { Section, Grid } from '../components'
import Graphic from '../components/Graphic'
import animationData from '../lotties/programming.json'

const Landing = () => {
  return (
    <Section>
      <Grid row>
        <Grid>Hello</Grid>
        <Grid><Graphic animationData={animationData} /></Grid>
      </Grid>
    </Section>
  )
}

export default Landing
