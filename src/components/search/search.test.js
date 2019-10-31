import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search componnet', () => {
  let wrapper, componnet;

  it('should render without error', () => {
    componnet = shallow(<Search />);
    wrapper = componnet.find('Search');
    expect(wrapper.length).toBe(1);
  });
});
