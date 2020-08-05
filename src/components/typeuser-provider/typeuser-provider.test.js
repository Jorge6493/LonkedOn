import React from 'react';
import { shallow } from 'enzyme';
import TypeuserProvider from './typeuser-provider';

describe('TypeuserProvider', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TypeuserProvider />);
    expect(wrapper).toMatchSnapshot();
  });
});
