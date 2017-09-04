import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ActiveOfficeReducer from './reducer_active_office.js';
import SearchOfficesReducer from './reducer_search_offices.js';
import ActiveBookingReducer from './reducer_active_booking.js';
import ActiveUser from './reducer_active_user';

const rootReducer = combineReducers({
  form: formReducer,
  activeUser: ActiveUser,
  offices: SearchOfficesReducer,
  activeOffice: ActiveOfficeReducer,
  activeBooking: ActiveBookingReducer
});

export default rootReducer;
