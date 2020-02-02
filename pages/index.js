import React from 'react'
import Card from '../components/Card'
import etLogo from '../static/etLogo.png'
import SocialMedia from '../components/SocialMedia'
import Page from '../components/Page'

const index = () => {
  return (
    <Page>
      <div id="root">

        <Card
          front={
            <>
              <div>
                <img height="250px" width="auto" src={etLogo} alt="Elephantech Logo" />
              </div>
              <div style={{ width: '75%', margin: 'auto', textAlign: 'center' }}>
                <h1 className="displayTitle">Elephan.tech is currently under construction</h1>
              </div>
            </>
          }
          back={
            <div style={{ width: '75%', margin: 'auto', textAlign: 'center' }}>
              <h1 className="displayTitle">Come back soon!</h1>
            </div>}
        />
      </div >
    </Page>
  )
}

export default index
