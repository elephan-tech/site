import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import Meta from './Meta'


const Inner = styled.div`
  width: inherit;
  padding: 2rem;
  height: auto;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size.main};
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
      {/* <Navbar {...props} /> */}
      <Grid justify="space-evenly">
        <Grid row></Grid>
        <Grid row><Inner className="INNER🔥">{children}</Inner></Grid>
      </Grid>
    </StyledPage>
  )
}

export default Page
