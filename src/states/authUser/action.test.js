import { asyncSetAuthUser, setAuthUserActionCreator } from './action';
import api from '../../utils/api';

const fakeToken = 'fake-token-123';
const fakeUser = { id: 'john', name: 'John', email: 'john@test.com' };

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
    api._putAccessToken = api.putAccessToken;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;
    api.putAccessToken = api._putAccessToken;
    delete api._login;
    delete api._getOwnProfile;
    delete api._putAccessToken;
  });

  it('should dispatch correctly when login success', async () => {
    api.login = () => Promise.resolve(fakeToken);
    api.putAccessToken = jest.fn();
    api.getOwnProfile = () => Promise.resolve(fakeUser);
    const dispatch = jest.fn();

    await asyncSetAuthUser({ email: 'test@test.com', password: 'password' })(dispatch);

    expect(api.putAccessToken).toHaveBeenCalledWith(fakeToken);
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUser));
  });

  it('should not dispatch authUser when login failed', async () => {
    api.login = () => Promise.reject(new Error('Login failed'));
    const dispatch = jest.fn();
    window.alert = jest.fn();

    await asyncSetAuthUser({ email: 'test', password: 'wrong' })(dispatch);

    expect(dispatch).not.toHaveBeenCalledWith(setAuthUserActionCreator(fakeUser));
  });
});