import React from 'react';
import { shallow } from 'enzyme';
import TypeuserContext from './typeuser-context';

describe('TypeuserContext', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TypeuserContext />);
    expect(wrapper).toMatchSnapshot();
  });
});
