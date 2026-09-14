import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import { setAuthUserActionCreator } from '../authUser/action';
import api from '../../utils/api';

const fakeUserResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeUserResponse);
    const dispatch = jest.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUserResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    api.getOwnProfile = () => Promise.reject(new Error('Network error'));
    const dispatch = jest.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
  });
});