import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navigation() {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b shadow-sm border-slate-200">
      <div>
        <Link to="/" className="text-2xl font-bold text-blue-600">
                    ForumApp
        </Link>
        <Link to="/leaderboards" className="font-medium text-gray-600 transition hover:text-blue-600">
                    Leaderboards
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {authUser ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={authUser.avatar}
                alt={authUser.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium text-gray-700">{authUser.name}</span>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm text-red-600 transition border border-red-600 rounded hover:bg-red-50"
            >
                            Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 text-sm text-blue-600 transition hover:underline">
                            Login
            </Link>
            <Link to="/register" className="px-4 py-2 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700">
                            Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;