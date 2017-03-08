import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <Button 
        title="Test"
      />
    );
  });
})
