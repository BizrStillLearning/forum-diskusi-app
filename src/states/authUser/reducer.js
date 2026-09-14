const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
  case ActionType.SET_AUTH_USER:
    return action.payload.authUser;
  case ActionType.UNSET_AUTH_USER:
    return null;
  default:
    return authUser;
  }
}

export default authUserReducer;