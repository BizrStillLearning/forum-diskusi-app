import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';
import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = screen.getByPlaceholderText('Judul Thread');

    await userEvent.type(titleInput, 'Judul Baru');

    expect(titleInput).toHaveValue('Judul Baru');
  });

  it('should handle category typing correctly', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const categoryInput = screen.getByPlaceholderText('Kategori (opsional)');

    await userEvent.type(categoryInput, 'React');

    expect(categoryInput).toHaveValue('React');
  });

  it('should handle body typing correctly', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const bodyInput = screen.getByPlaceholderText('Isi Thread...');

    await userEvent.type(bodyInput, 'Ini adalah isi thread');

    expect(bodyInput).toHaveValue('Ini adalah isi thread');
  });

  it('should call addThread function when form is submitted', async () => {
    const mockAddThread = jest.fn();
    render(<ThreadInput addThread={mockAddThread} />);
    const titleInput = screen.getByPlaceholderText('Judul Thread');
    const categoryInput = screen.getByPlaceholderText('Kategori (opsional)');
    const bodyInput = screen.getByPlaceholderText('Isi Thread...');
    const submitButton = screen.getByRole('button', { name: 'Buat Thread' });

    await userEvent.type(titleInput, 'Judul Baru');
    await userEvent.type(categoryInput, 'React');
    await userEvent.type(bodyInput, 'Ini adalah isi thread');
    await userEvent.click(submitButton);

    expect(mockAddThread).toHaveBeenCalledWith({
      title: 'Judul Baru',
      category: 'React',
      body: 'Ini adalah isi thread',
    });
  });
});