import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer'
import { shallow } from 'enzyme';
import local from '../../data/local';

describe('NewsContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NewsContainer
      news={local}
    />)
      expect(wrapper).toMatchSnapshot()
  })
})
