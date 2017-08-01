import React, { Component } from 'react';
import SearchBar from './search_bar';
import OfficeList from './office_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h4>办公室查询</h4>
        <SearchBar />
        <OfficeList />
      </div>
    );
  }
}
