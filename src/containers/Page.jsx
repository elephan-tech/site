import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid, Meta, ResponsiveLayout } from '../components'

const Inner = styled.div`
  /* padding: 2rem; */
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


const Page = ({ title, description, children, theme, ...props }) => {
  console.log({ props })
  return (
    <ResponsiveLayout breakpoints={theme.dimensions}>
      <StyledPage>
        <Meta title={title} description={description} />
        {/* <Navbar {...props} /> */}
        <Grid justify="space-evenly">
          <Grid row></Grid>
          <Grid row><Inner>{children}</Inner></Grid>
        </Grid>
      </StyledPage>
    </ResponsiveLayout>

  )
}

export default Page
