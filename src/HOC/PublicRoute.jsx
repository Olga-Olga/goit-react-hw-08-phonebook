import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selector';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};
