import { combineReducers } from 'redux';
import ActiveOfficeReducer from './reducer_active_office.js';
import SearchOfficesReducer from './reducer_search_offices.js';

const rootReducer = combineReducers({
  activeOffice: ActiveOfficeReducer,
  offices: SearchOfficesReducer
});

export default rootReducer;
