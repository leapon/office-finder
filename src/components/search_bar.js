import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term:'' };
  }
  onChange(event) {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render () {
    return (
      <div>
        <input
          value= { this.state.term }
          onChange={ this.onChange.bind(this) } />
      </div>
    )
  }
}

export default SearchBar;
