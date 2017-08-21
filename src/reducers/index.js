import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ActiveOfficeReducer from './reducer_active_office.js';
import SearchOfficesReducer from './reducer_search_offices.js';
import BookingReducer from './reducer_booking.js';

const rootReducer = combineReducers({
  activeOffice: ActiveOfficeReducer,
  offices: SearchOfficesReducer,
  form: formReducer
});

export default rootReducer;
