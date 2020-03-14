import React from 'react'
import Navbar from './Navbar'
import Meta from './Meta'
import styled from 'styled-components'


const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  margin-top: 80px;
  padding: 2rem;
  height: auto;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
`;

const Page = ({ title, description, children }) => {
  return (
    <div>
      <Meta title={title} description={description} />
      <Navbar />
      <Inner>{children}</Inner>
    </div>
  )
}

export default Page
