import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <section className="max-w-2xl p-6 mx-auto bg-white border rounded shadow-sm border-slate-200">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Klasemen Pengguna Aktif</h2>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between pb-2 mb-2 font-semibold text-gray-500 border-b">
          <span>Pengguna</span>
          <span>Skor</span>
        </div>

        {leaderboards.map(({ user, score }) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full shadow-sm" />
              <span className="font-medium text-gray-800">{user.name}</span>
            </div>
            <span className="text-xl font-bold text-blue-600">{score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeaderboardPage;