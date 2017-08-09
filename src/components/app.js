import React, { Component } from 'react';
import _ from 'lodash';
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
  }
  onSearchTermChange(term) {
    console.log('search term change:', term);
    if (!term) {
      this.setState({ activeOffice:null });
      this.setState({ offices:[] });
      return;
    }
    const matchedOffices = _.filter(offices, (office) => {
      return office.name.indexOf(term) > -1;
    });
    if (matchedOffices.length > 0) {
      this.setState({ activeOffice:matchedOffices[0] });
    }
    this.setState({ offices:matchedOffices });
  }
  onOfficeSelect(office) {
    console.log('>>> onOfficeSelect', office);
    this.setState({ activeOffice:office });
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
            <OfficeList
              onOfficeSelect={ this.onOfficeSelect.bind(this) } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;