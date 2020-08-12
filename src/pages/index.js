import React from 'react'
import sections from '../sections'
import { Section, Page } from '../containers'
import { Login, IonGrid, IonRow } from '../components'

export default (props) => {
  return (
    <>
      <Page {...props}>
        {sections.map(({ render, title }) => (render(props) && <Section key={title} title={title}>{render(props, title)}</Section>))}
      </Page>
      <Login />
    </>
  )
};

