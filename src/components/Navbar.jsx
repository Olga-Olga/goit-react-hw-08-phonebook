import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutThunk } from 'redux/authOperations';
import {
  // selecIsRefresh,
  selectIsLoggedIn,
  // selectUserEmail,
  selectUserName,
} from 'redux/selector';
import { styled } from 'styled-components';

export const Navbar = () => {
  const dispatch = useDispatch();
  // const logout = useSelector(isLogin);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success('See you later!');
      });
  };

  // const refresh = useSelector(selecIsRefresh);

  const isLogin = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  // const email = useSelector(selectUserEmail);
  // console.log(isLogin);

  return (
    <div>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLogin ? (
        <div>{name}</div>
      ) : (
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      )}
      {isLogin ? (
        <div>
          <NavLinkStyled to="/contact">Contacts</NavLinkStyled>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      )}
    </div>
  );
};

const NavLinkStyled = styled(NavLink)`
  /* position: relative; */
  display: flex;
`;
// const LikedCounterStyled = styled.span`
//   position: absolute;
//   right: 50%;
//   transform: translate(50%, -110%);
// `;

