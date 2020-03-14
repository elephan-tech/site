import React from 'react'
import Navbar from './Navbar'
import Meta from './Meta'
import styled from 'styled-components'


const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  margin-top: 80px;
  padding: 2rem;
  min-height: 500px;
  height: auto;
`;

const Page = ({ title, description, children }) => {
  return (
    <div id={title}>
      <Meta title={title} description={description} />
      <Navbar />
      <Inner>{children}</Inner>
    </div>
  )
}

export default Page
