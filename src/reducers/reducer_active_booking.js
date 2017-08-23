export default function(state = null, action) {
  switch(action.type) {
  case 'BOOKING_DETAIL':
    const docs = action.payload.data.docs;
    return docs[0] || null;
  default:
    return state;
  }
}
