import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { ActionType } from './reducer';

function receiveDetailThreadActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: { detailThread },
  };
}

function clearDetailThreadActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_THREAD,
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: { comment },
  };
}

function asyncReceiveDetailThread(threadId) {
  return async (dispatch) => {
    dispatch(clearDetailThreadActionCreator());
    dispatch(showLoading());
    try {
      const detailThread = await api.getDetailThread(threadId);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  receiveDetailThreadActionCreator,
  clearDetailThreadActionCreator,
  addCommentActionCreator,
  asyncReceiveDetailThread,
  asyncAddComment,
};