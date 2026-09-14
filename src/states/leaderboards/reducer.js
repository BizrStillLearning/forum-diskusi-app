const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function leaderboardsReducer(leaderboards = [], action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_LEADERBOARDS:
    return action.payload.leaderboards;
  default:
    return leaderboards;
  }
}

export default leaderboardsReducer;
export { ActionType };