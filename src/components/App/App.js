import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: [...local,
      ...entertainment,
      ...health,
      ...science,
      ...technology],
      filtered: undefined
    }
  }

  searchThroughNews = (value) => {
    let filteredValues = this.state.selected.filter(newsType => {
      return Object.values(newsType)[1].toLowerCase().includes(value.toLowerCase()) || Object.values(newsType)[3].toLowerCase().includes(value.toLowerCase())
    })

    this.setState({
      filtered: filteredValues
      })
  }

  getNewsType = (event) => {
    switch (event) {
      case 'local':
        this.setState({selected: local, filtered: undefined})
        break
      case 'technology':
        this.setState({selected: technology, filtered: undefined})
        break
      case 'entertainment':
        this.setState({selected: entertainment, filtered: undefined})
        break
      case 'science':
        this.setState({selected: science, filtered: undefined})
        break
      case 'health':
        this.setState({selected: health, filtered: undefined})
        break
      default:
        break
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm search={this.searchThroughNews}/>
        <Menu onClick={(event) => this.getNewsType(event.target.id)}/>
        <NewsContainer news={this.state.filtered ? this.state.filtered : this.state.selected} />
      </div>
    );
  }
}

export default App;
