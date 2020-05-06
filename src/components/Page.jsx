import React from 'react'
import Navbar from './Navbar'
import Meta from './Meta'
import Grid from './Grid'
import styled from 'styled-components'


const Inner = styled.div`
  width: inherit;
  padding: 2rem;
  height: auto;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
`;

const StyledPage = styled.div`
  margin: -8px;
  flex-direction: column;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  display: flex;
`

const Page = (props) => {
  const { title, description, children } = props
  return (
    <StyledPage>
      <Meta title={title} description={description} />
      <Navbar {...props} />
      <Grid justify="space-evenly">
        <Grid row></Grid>
        <Grid row><Inner className="INNER🔥">{children}</Inner></Grid>
      </Grid>
    </StyledPage>
  )
}

export default Page
