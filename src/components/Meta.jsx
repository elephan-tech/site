import React from 'react'
import Head from 'next/head'
import etLogo from '../public/etLogo.svg'


const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{`ElephanTech - ${title || 'Home'}`}</title>
      <link rel="shortcut icon" href={etLogo} />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={`ElephanTech - ${title || 'home'}`} />
      <meta name="og:description" property="og:description" content={description} />
      <meta name="og:image" property="og:image" content="/static/etLogo.png" />
    </Head>
  )
}

export default Meta
