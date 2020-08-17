import React from 'react';
import sections from '../sections';
import { Section, Page } from '../containers';

const Index = (props) => {
  return (
    <>
      <Page {...props}>
        {sections.map(({ renderSection, title }) => (renderSection(props) && <Section {...props} key={title} title={title}>{renderSection(props)}</Section>))}
      </Page>
    </>
  );
};


export default Index;