import React from 'react';
import { shallow } from 'enzyme';
import { FreeTierButtonVanilla } from '../FreeTierButton';

test('FreeTierButton render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<FreeTierButtonVanilla  />);
  expect(wrapper).toMatchSnapshot();
});