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
    console.log('search_bar term change:', term);
    //this.props.onSearchTermChange(term);
  }
  render () {
    return (
      <div>
        <input
          className="form-control"
          value= { this.state.term }
          onChange={ this.onChange.bind(this) } />
      </div>
    )
  }
}

export default SearchBar;
