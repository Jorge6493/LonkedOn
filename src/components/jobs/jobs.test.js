import React from 'react';
import { shallow } from 'enzyme';
import Jobs from './jobs';

describe('Jobs', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Jobs />);
    expect(wrapper).toMatchSnapshot();
  });
});
