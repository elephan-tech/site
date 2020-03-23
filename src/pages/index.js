import React from 'react'
import {
  About,
  Contact,
  Team,
  Portfolio
} from '../sections'
import Page from '../components/Page'

const index = () => {
  return (
    <Page>
      <About />
      <Team />
      <Portfolio />
      <Contact />
    </Page>
  )
}

export default index
