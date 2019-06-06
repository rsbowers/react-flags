import React from 'react';
import { shallow } from 'enzyme';
import { FlagHocVanilla } from '../FlagHoc';

test('FlagHoc render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<FlagHocVanilla  />);
  expect(wrapper).toMatchSnapshot();
});