import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  onInputChange(event) {
    console.log('input change:', event.target.value);
  }
  render () {
    return (
      <div>
        <input onChange={ this.onInputChange }/>
      </div>
    )
  }
}

export default SearchBar;