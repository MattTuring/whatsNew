import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { shallow } from 'enzyme';
import local from '../../data/local'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App Test', () => {

  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<App/>)
    })

  it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
  })

  it('should search through news', () => {
    const mockState =  [{"description": "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.", "headline": "Spider-Man Will Remain in the Marvel Cinematic Universe", "id": 1, "img": "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp", "url": "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"}]
    expect(wrapper.state().filtered).toEqual(undefined)
      wrapper.instance().searchThroughNews('Spider-Man')
      expect(wrapper.state().filtered).toEqual(mockState)
  })

  it('should select a news type', () => {
      wrapper.instance().getNewsType('local')
      expect(wrapper.state().selected).toEqual(local)
  })
})
