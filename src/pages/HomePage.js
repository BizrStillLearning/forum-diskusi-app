import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const categories = Array.from(new Set(threads.map((thread) => thread.category))).filter(Boolean);

  const filteredThreads = activeCategory
    ? threadList.filter((thread) => thread.category === activeCategory)
    : threadList;

  return (
    <section className="space-y-6">

      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase">Kategori Populer</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? '' : category)}
              className={`px-3 py-1 text-sm border rounded-full transition ${
                activeCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
                            #{category}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <div>
        <h2 className="mb-4 text-xl font-semibold">Diskusi Tersedia</h2>

        {filteredThreads.length === 0 ? (
          <p className="text-gray-500 text-center py-10">Belum ada diskusi untuk kategori ini.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredThreads.map((thread) => (
              <div key={thread.id} className="p-4 bg-white border rounded shadow-sm border-slate-200">
                <h3 className="text-lg font-bold text-blue-600 hover:underline">
                  <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
                </h3>
                <p className="mt-2 text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: thread.body }} />

                <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                  <img src={thread.user?.avatar} alt={thread.user?.name} className="w-6 h-6 rounded-full" />
                  <span>{thread.user?.name}</span>
                  <span>•</span>
                  <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{thread.totalComments} Komentar</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {authUser && (
        <Link
          to="/new"
          className="fixed flex items-center justify-center w-14 h-14 text-3xl text-white transition bg-blue-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-blue-700 hover:scale-110"
          title="Buat Thread Baru"
        >
                    +
        </Link>
      )}
    </section>
  );
}

export default HomePage;