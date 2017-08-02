import React, { Component } from 'react';
import SearchBar from './search_bar';
import OfficeList from './office_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      offices:[]
    };
  }
  onSearchTermChange(term) {
    console.log('search term change:', term);
    const offices = term.split('').map( item => { return { name:'office_' + item} });
    this.setState({ offices });
  }
  render() {
    return (
      <div>
        <h4>办公室查询</h4>
        <SearchBar onSearchTermChange={ this.onSearchTermChange.bind(this) }/>
        <OfficeList offices={ this.state.offices }/>
      </div>
    );
  }
}

export default App;