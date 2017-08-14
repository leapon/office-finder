import { combineReducers } from 'redux';
//import OfficesReducer from './reducer_offices';
import ActiveOfficeReducer from './reducer_active_office.js';
import SearchOfficesReducer from './reducer_search_offices.js';

const rootReducer = combineReducers({
  //offices: OfficesReducer,
  activeOffice: ActiveOfficeReducer,
  offices: SearchOfficesReducer
});

export default rootReducer;
