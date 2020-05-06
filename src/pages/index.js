import React from 'react'
import sections from '../sections'
import Page from '../components/Page'
import { Section } from '../components'

export default () => <Page> {sections.map(({ RenderSection, title }) => <Section key={title} title={title}><RenderSection /></Section>)}</Page>

