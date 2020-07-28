import React from 'react';
import { shallow } from 'enzyme';
import Postjob from './postjob';

describe('Postjob', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Postjob />);
    expect(wrapper).toMatchSnapshot();
  });
});
