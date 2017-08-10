export default function(state = null, action) {
  switch(action.type) {
  case 'OFFICE_SELECTED':
    return action.payload;
  default:
    return state;
  }
}
