import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextEditor from './TextEditor';

storiesOf('TextEditor', module)
  .add('default', () => (
    <TextEditor
      handleChangeCode={() => {console.log('code updated')}}
    />
  ));