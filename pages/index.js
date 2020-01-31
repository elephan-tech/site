import React from 'react'
import Card from '../components/Card'
import etLogo from '../static/etLogo.png'
import SocialMedia from '../components/SocialMedia'

const index = () => {
  return (
    <div id="root">
      <Card
        front={
          <>
            <div>
              <img height="250px" width="auto" src={etLogo} alt="Elephantech Logo" />
            </div>
            <div style={{ width: '75%', margin: 'auto', textAlign: 'center' }}>
              <h1 className="displayTitle">Elephantech is currently under construction</h1>
            </div>
            {/* <h2 className="subtitle">Follow us in social media =></h2> */}

          </>
        }
        back={
          <div style={{ width: '75%', margin: 'auto', textAlign: 'center' }}>
            <h1 className="displayTitle">Come back soon!</h1>
          </div>}
      />
    </div >
  )
}

export default index
