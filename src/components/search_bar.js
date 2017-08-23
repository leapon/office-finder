import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchOffice } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term:'' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    const term = event.target.value;
    this.setState({ term }, this.onFormSubmit);
  }
  onFormSubmit(event) {
    event && event.preventDefault();
    this.props.searchOffice(this.state.term);
    console.log('search_bar submit:', this.state.term);
  }
  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            value= { this.state.term }
            onChange={ this.onChange } />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchOffice }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
