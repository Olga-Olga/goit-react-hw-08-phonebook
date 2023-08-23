import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { regThunk } from 'redux/authOperations';

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
        plaсeholder="Enter Name"
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type="email"
        plaсeholder="Enter email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        plaсeholder="Enter password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button>Log In</button>
    </form>
  );
};
