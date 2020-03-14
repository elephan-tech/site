import React from 'react'
import Card from '../components/Card'
import etLogo from '../public/etLogo.png'
import { About, Contact, Team, Portfolio } from '../sections'
import Page from '../components/Page'

const index = () => {
  return (
    <Page>
      <div>
        <About />
        <Team />
        <Portfolio />
        <Contact />
      </div >
    </Page>
  )
}

export default index
