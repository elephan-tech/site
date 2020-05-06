import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import Navbar from './index';
import Page from '../Page';
import Section from '../Section';
import FakeText from '../FakeText';

storiesOf('Navbar', module)
  .add('With Content', () => <Page><Section><FakeText paragraphs={10} /></Section></Page>)
