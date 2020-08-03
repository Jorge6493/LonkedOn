import React from 'react';
import { shallow } from 'enzyme';
import JobformPreviewModal from './jobform-preview-modal';

describe('JobformPreviewModal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<JobformPreviewModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
