import React from 'react';
import { styled } from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { loginThunk} from 'redux/authOperations';
// import { styled } from 'styled-components';

export const Home = () => {
  // const dispatch = useDispatch();
  // const credentials = {
  //   name: 'Petro',
  //   email: 'Petro100500@mail.com',
  //   password: 'qwerty123',
  // };

  // const handleLogin = () => {
  //   dispatch();
  //   loginThunk({ email: credentials.email, password: credentials.password });
  // };

  return (
    <>
      <StyledDiv>
        <h1>I love js</h1>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  flex: 1;
  height: 1px;
  background-color: grey;
  margin-top: 20px;
`;
