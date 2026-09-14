import React, { Profiler, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { asyncPreloadProcess } from './states/isPreload/action';

import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import CreateThreadPage from './pages/CreateThreadPage';
import LeaderboardPage from './pages/LeaderboardPage';

function App() {
  const { isPreload } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <div className="sticky top-0 z-50">
        <LoadingBar updateTime={100} maxProgress={95} progressIncrease={10} style={{ backgroundColor: 'blue', height: '5px' }} />
      </div>

      <Navigation />

      <main className="max-w-4xl p-4 mx-auto mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/new" element={<CreateThreadPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
