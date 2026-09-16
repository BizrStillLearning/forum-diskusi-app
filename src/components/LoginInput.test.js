import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';
import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'test@example.com');
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByLabelText(/password/i);
    await userEvent.type(passwordInput, 'password123');
    expect(passwordInput).toHaveValue('password123');
  });

  it('should call login callback when login button is clicked', async () => {
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(emailInput, 'test@example.com');

    const passwordInput = screen.getByLabelText(/password/i);
    await userEvent.type(passwordInput, 'password123');

    const loginButton = screen.getByRole('button', { name: /^login$/i });
    await userEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});