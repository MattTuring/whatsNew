import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm'
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchForm/>)
      expect(wrapper).toMatchSnapshot()
  })
})
