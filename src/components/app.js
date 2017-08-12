import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';
import OfficeList from './office_list';
import OfficeDetail from './office_detail';
import offices from '../data/offices.json';

class App extends Component {
  constructor(props) {
    super(props);
  }
  onSearchTermChange(term) {
    console.log('search term change:', term);
  }
  render() {
    return (
      <div>
        <div className="row search-header">
          <h4 className="col-md-12">办公室查询</h4>
          <div className="col-md-6">
          <SearchBar onSearchTermChange={ this.onSearchTermChange.bind(this) } />
          </div>
        </div>
        <div className="row content-body">
          <div className="col-md-8">
            <OfficeDetail />
          </div>
          <div className="col-md-4">
            <OfficeList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;