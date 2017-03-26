import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs from './Tabs';
import { Tab } from 'react-bootstrap';

storiesOf('Tabs', module)
  .add('with one tab', () => (
    <Tabs defaultTab={1}>
      <Tab eventKey={1} title="Tab 1">
        Test tab 1
      </Tab>
      <Tab eventKey={2} title="Tab 2">
        Test tab 2
      </Tab>
    </Tabs>
  )); 