import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authOperations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button>Log In</button>
    </form>
  );
};
