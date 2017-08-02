import React, { Component } from 'react';
import SearchBar from './search_bar';
import OfficeList from './office_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      offices:[
        { name:'office1' },
        { name:'office2' }
      ]
    };
  }
  render() {
    return (
      <div>
        <h4>办公室查询</h4>
        <SearchBar />
        <OfficeList offices={ this.state.offices }/>
      </div>
    );
  }
}

export default App;