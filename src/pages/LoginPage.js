import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = (event) => {
    event.preventDefault();

    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <section className="max-w-md p-6 mx-auto mt-10 bg-white border rounded shadow-md border-slate-200">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>

      <form onSubmit={onLogin} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
                    Login
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
                Belum punya akun? <Link to="/register" className="text-blue-600 underline">Daftar di sini</Link>
      </p>
    </section>
  );
}

export default LoginPage;