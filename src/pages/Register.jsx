import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { regThunk } from 'redux/Auth/authOperations';
// import { regThunk } from 'redux/authOperations';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(regThunk({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button>Log In</button>
    </form>
  );
};
