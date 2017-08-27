export default function(state = null, action) {
  switch(action.type) {
  case 'USER_SIGNUP':
  case 'USER_SIGNIN':
    console.log('>>> user request action.type:', action.type);
    console.log('>>> user request return:', action);
    //const docs = action.payload.data && action.payload.data.docs;
    return null;
  default:
    return state;
  }
}
