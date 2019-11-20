import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allNews: [...local,
      ...entertainment,
      ...health,
      ...science,
      ...technology],
      selected: undefined
    }
  }

  getNewsType = (event) => {
    switch (event) {
      case 'local':
        this.setState({selected: local})
        break
      case 'technology':
        this.setState({selected: technology})
        break
      case 'entertainment':
        this.setState({selected: entertainment})
        break
      case 'science':
        this.setState({selected: science})
        break
      case 'health':
        this.setState({selected: health})
        break
      default:
        break
    }
  }

  render () {
    return (
      <div className="app">
        <Menu onClick={(event) => this.getNewsType(event.target.id)}/>
        <NewsContainer news={this.state.selected ? this.state.selected : this.state.allNews} />
      </div>
    );
  }
}

export default App;
