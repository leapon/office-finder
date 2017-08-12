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
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            value= { this.state.term }
            onChange={ this.onChange.bind(this) } />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}

export default SearchBar;
