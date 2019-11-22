import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle'
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockInfo = {"description": "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.", "headline": "Spider-Man Will Remain in the Marvel Cinematic Universe", "id": 1, "img": "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp", "url": "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"}
    const wrapper = shallow(<NewsArticle
      key={1} info={mockInfo} />);

    expect(wrapper).toMatchSnapshot();
 })
})
