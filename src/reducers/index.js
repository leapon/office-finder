import { combineReducers } from 'redux';
import OfficesReducer from './reducer_offices';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  offices: OfficesReducer
});

export default rootReducer;
