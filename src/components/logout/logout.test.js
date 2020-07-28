import React from 'react';
import { shallow } from 'enzyme';
import Logout from './logout';

describe('Logout', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Logout />);
    expect(wrapper).toMatchSnapshot();
  });
});
