import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term:'' };
  }
  render () {
    return (
      <div>
        <input
          value= { this.state.term }
          onChange={ event => this.setState({ term:event.target.value }) }/>
        <div>
        input: { this.state.term }
        </div>
      </div>
    )
  }
}

export default SearchBar;
