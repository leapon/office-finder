//import offices from '../data/offices.json';

export default function(state=null, action) {
  switch(action.type) {
  case 'SEARCH_OFFICE':
    return action.payload.data.docs;
  default:
    return state;
  }
}