import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { ActionType } from './reducer';

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: { leaderboards },
  };
}

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { receiveLeaderboardsActionCreator, asyncReceiveLeaderboards };