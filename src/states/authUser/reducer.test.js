import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return authUser when given by SET_AUTH_USER action', () => {
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: { id: 'john_doe', name: 'John Doe', email: 'john@example.com' },
      },
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    const initialState = { id: 'john_doe', name: 'John Doe', email: 'john@example.com' };
    const action = { type: 'UNSET_AUTH_USER' };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(null);
  });
});