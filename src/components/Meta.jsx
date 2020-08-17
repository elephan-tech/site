import React from 'react';
import Head from 'next/head';
import etLogo from '../public/logos/etLogo.svg';
import { string } from 'prop-types';


const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{`ElephanTech - ${title || 'Home'}`}</title>
      <link rel="shortcut icon" href={etLogo} />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={`ElephanTech - ${title || 'home'}`} />
      <meta name="og:description" property="og:description" content={description} />
      <meta name="og:image" property="og:image" content={etLogo} />

      <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>

      <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" type="text/css" href="https://elephan.tech/public/icons/flaticon.css"></link>
    </Head>
  );
};

Meta.propTypes = {
  title: string,
  description: string,
};

export default Meta;
