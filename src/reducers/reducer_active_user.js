export default function(state = null, action) {
  //console.log('>>> reducer_active_user action.type:', action.type);
  switch(action.type) {
  case 'USER_SIGNUP':
  case 'USER_SIGNIN':
    console.log('>>> user request action.type:', action.type);
    console.log('>>> user request return - action:', action);
    //const docs = action.payload.data && action.payload.data.docs;
    return { username:'tester' };
  case 'USER_SIGNOUT':
    console.log('>>> user request signout:', action.type);
    return null;
  default:
    return state;
  }
}
