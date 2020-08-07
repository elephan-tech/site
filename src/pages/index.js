import React from 'react'
import sections from '../sections'
import { Section, Page } from '../containers'
import { Login } from '../components'

export default (props) => console.log({ props }) || (
  <>
    <Page {...props}>
      {sections.map(({ render, title }) => (render &&
        <Section
          id={title}
          key={title}
          title={title}
        >
          {render(props)}
        </Section>))}
    </Page>
    <Login />
  </>
);

