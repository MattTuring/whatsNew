import React from 'react';
import './SearchForm.css';


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  updateSeachValue = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <input onChange={(event) => {this.updateSeachValue(event); this.props.search(this.state.searchValue)}} placeholder='Search'></input>
    )
  }
}

export default SearchForm;
