import React from 'react';
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/authSelector';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
