import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';

function CreateThreadPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="max-w-2xl p-6 mx-auto bg-white border rounded shadow-sm border-slate-200">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Buat Diskusi Baru</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500"
            placeholder="Apa yang ingin Anda diskusikan?"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Kategori (Opsional)</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500"
            placeholder="contoh: react, redux, ui"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Isi Diskusi</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500 min-h-[150px]"
            placeholder="Tuliskan detail diskusi di sini..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
                    Buat Thread
        </button>
      </form>
    </section>
  );
}

export default CreateThreadPage;