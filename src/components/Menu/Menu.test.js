import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu'
import { shallow } from 'enzyme';

describe('Menu', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Menu/>)
      expect(wrapper).toMatchSnapshot()
  })
})
