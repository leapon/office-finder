export default function(state = null, action) {
  switch(action.type) {
  case 'OFFICE_SELECTED':
    return action.payload;
  case 'SEARCH_OFFICE':
    // set 1st office in search result to be active office
    const offices = action.payload.data.docs;
    return offices[0] || null;
  case 'OFFICE_DETAIL':
    const docs = action.payload.data.docs;
    return docs[0] || null;
  default:
    return state;
  }
}
