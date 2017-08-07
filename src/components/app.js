import React, { Component } from 'react';
import SearchBar from './search_bar';
import OfficeList from './office_list';
import OfficeDetail from './office_detail';
import offices from '../data/offices.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      activeOffice: null,
      offices: []
    };
    console.log('>>> offices:', offices);
  }
  onSearchTermChange(term) {
    console.log('search term change:', term);
    const offices = term.split('').map( (item, index) => {
      return {
        id:'item_' + index + '_' + item,
        name:'office_' + item
      }
    });
    this.setState({ offices });
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
            <OfficeDetail office={ this.state.activeOffice } />
          </div>
          <div className="col-md-4">
            <OfficeList offices={ this.state.offices } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;