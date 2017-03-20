import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextEditor from 'js/components/TextEditor';

storiesOf('TextEditor', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  