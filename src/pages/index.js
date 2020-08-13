import React from 'react'
import sections from '../sections'
import { Section, Page } from '../containers'

export default (props) => {
  return (
    <>
      <Page {...props}>
        {sections.map(({ render, title }) => (render(props) && <Section {...props} key={title} title={title}>{render(props, title)}</Section>))}
      </Page>
    </>
  )
};

