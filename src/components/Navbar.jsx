import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutThunk } from 'redux/authOperations';
import {
  selectIsLoggedIn,
  selectUserEmail,
  selectUserName,
} from 'redux/selector';
import { styled } from 'styled-components';

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success('See you later!');
      });
  };

  const isLogin = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  // console.log(isLogin);

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLogin ? <div>{name}</div> : <NavLink to="/login">Login</NavLink>}
      {isLogin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <NavLink to="/register">Register</NavLink>
      )}
    </div>
  );
};

const NavLinkStyled = styled(NavLink)`
  position: relative;
`;
const LikedCounterStyled = styled.span`
  position: absolute;
  right: 50%;
  transform: translate(50%, -110%);
`;
