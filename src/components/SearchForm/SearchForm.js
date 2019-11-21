import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
  <input onChange={() => props.search(document.querySelector('input').value)} placeholder='Search'></input>
  )
}

export default SearchForm;
