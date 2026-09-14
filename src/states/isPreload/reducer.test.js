import isPreloadReducer from './reducer';

describe('isPreloadReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    const initialState = true;
    const action = { type: 'UNKNOWN' };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return isPreload value when given by SET_IS_PRELOAD action', () => {
    const initialState = true;
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: { isPreload: false },
    };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.isPreload);
  });
});