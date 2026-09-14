import React, { useState } from 'react';

function LoginInput({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500" required />
      </div>
      <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                Login
      </button>
    </form>
  );
}

export default LoginInput;