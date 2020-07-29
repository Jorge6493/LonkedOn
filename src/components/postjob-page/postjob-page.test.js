import React from 'react';
import { shallow } from 'enzyme';
import PostjobPage from './postjob-page';

describe('PostjobPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<PostjobPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
