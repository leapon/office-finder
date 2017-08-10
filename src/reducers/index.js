import { combineReducers } from 'redux';
import OfficesReducer from './reducer_offices';
import ActiveOfficeReducer from './reducer_active_office.js';

const rootReducer = combineReducers({
  offices: OfficesReducer,
  activeOffice: ActiveOfficeReducer
});

export default rootReducer;
