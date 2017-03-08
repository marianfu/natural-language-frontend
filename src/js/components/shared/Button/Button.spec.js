import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  it('should render one button', () => {
    const wrapper = shallow(
      <Button
        title="Button"
      />
    );
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render a disabled button', () => {
    const wrapper = shallow(
      <Button
        title="Disabled button"
        disabled
      />
    );
    const disabled = wrapper.find('button').hasClass('disabled');
    expect(disabled).toBe(true);
  });

  it('should simulate click event', () => {
    const callback = sinon.spy();
    const wrapper = shallow(
      <Button
        title="Button"
        onClick={callback}
      />
    );
    wrapper.find('button').simulate('click');
    expect(callback.calledOnce).toBe(true);
  });
})
