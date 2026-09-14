import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveDetailThread, asyncAddComment } from '../states/detailThread/action';

function DetailPage() {
  const { id } = useParams();
  const { detailThread, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onCommentSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncAddComment({ threadId: id, content }));
    setContent('');
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="p-6 bg-white border rounded shadow-sm border-slate-200">
        <h2 className="mb-4 text-2xl font-bold text-blue-700">{detailThread.title}</h2>

        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
          <img src={detailThread.owner.avatar} alt={detailThread.owner.name} className="w-8 h-8 rounded-full" />
          <span className="font-semibold text-gray-800">{detailThread.owner.name}</span>
          <span>•</span>
          <span>{new Date(detailThread.createdAt).toLocaleDateString()}</span>
        </div>

        <div
          className="text-gray-800"
          dangerouslySetInnerHTML={{ __html: detailThread.body }}
        />
      </div>

      <div className="p-6 bg-white border rounded shadow-sm border-slate-200">
        <h3 className="mb-4 text-lg font-semibold">Beri Komentar</h3>

        {authUser ? (
          <form onSubmit={onCommentSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border rounded border-slate-300 focus:outline-none focus:border-blue-500 min-h-[100px]"
              placeholder="Tulis komentar Anda di sini..."
              required
            />
            <button
              type="submit"
              className="px-4 py-2 mt-3 text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
                            Kirim Komentar
            </button>
          </form>
        ) : (
          <p className="p-4 text-gray-600 bg-gray-100 rounded">
            <Link to="/login" className="font-semibold text-blue-600 underline">Login</Link> untuk memberikan komentar.
          </p>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Komentar ({detailThread.comments.length})</h3>

        {detailThread.comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-white border rounded shadow-sm border-slate-200">
            <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
              <img src={comment.owner.avatar} alt={comment.owner.name} className="w-6 h-6 rounded-full" />
              <span className="font-semibold text-gray-800">{comment.owner.name}</span>
              <span>•</span>
              <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
            </div>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailPage;