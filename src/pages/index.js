import React from 'react'
import sections from '../sections'
import Page from '../components/Page'
import { Section, Login } from '../components'

export default (props) => (
  <>
    <Page>
      {sections.map(({ RenderSection, title }) => {
        const hasContent = RenderSection();
        return (
          hasContent &&
          <Section id={title} key={title} title={title}>
            <RenderSection {...props} />
          </Section>)
      })}
    </Page>
    <Login />
  </>
);

