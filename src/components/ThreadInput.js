import React, { useState } from 'react';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addThread({ title, body, category });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500" placeholder="Judul Thread" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500" placeholder="Kategori (opsional)" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} className="w-full p-2 border rounded border-slate-300 focus:outline-none focus:border-blue-500 min-h-[150px]" placeholder="Isi Thread..." required />
      <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700">Buat Thread</button>
    </form>
  );
}

export default ThreadInput;
