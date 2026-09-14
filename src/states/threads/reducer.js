const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
};

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREADS:
    return action.payload.threads;
  case ActionType.ADD_THREAD:
    return [action.payload.thread, ...threads];
  default:
    return threads;
  }
}

export default threadsReducer;
export { ActionType };