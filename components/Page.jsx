import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import etLogo from '../public/etLogo.ico'

const Page = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{`ElephanTech - ${title || 'home'}`}</title>
        <link rel="shortcut icon" href={etLogo}/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="og:title" property="og:title" content={`ElephanTech - ${title || 'home'}`} />
        <meta name="og:description" property="og:description" content={description} />
        <meta name="og:image" property="og:image" content="/static/etLogo.png" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Page
