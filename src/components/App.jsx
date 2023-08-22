import { styled } from 'styled-components';
import ContactList from './ContactList/ContactList';
import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { FcSmartphoneTablet, FcFilledFilter, FcTodoList } from 'react-icons/fc';
import { selectIsLoading } from 'redux/selector';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Layout } from './Layout';
import { LoginForm } from 'pages/LoginForm';
import NotFound from 'pages/NotFound';
import { PublicRoute } from 'HOC/PrivateRoute';
import { PrivateRoute } from 'HOC/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  const load = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="todo"
          element={
            <PrivateRoute>
              <StyledDiv>
                <StyledTitle>
                  Phonebook <FcSmartphoneTablet />
                </StyledTitle>
                <ContactsForm />
                <StyledTitle>
                  Filter
                  <FcFilledFilter />
                </StyledTitle>
                <Filter />
                <StyledTitle>
                  Contacts <FcTodoList />
                </StyledTitle>
                {!load ? <ContactList /> : <h1>Loading...</h1>}
              </StyledDiv>
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* <StyledDiv>
        <StyledTitle>
          Phonebook <FcSmartphoneTablet />
        </StyledTitle>
        <ContactsForm />
        <StyledTitle>
          Filter
          <FcFilledFilter />
        </StyledTitle>
        <Filter />
        <StyledTitle>
          Contacts <FcTodoList />
        </StyledTitle>
        {!load ? <ContactList /> : <h1>Loading...</h1>}
      </StyledDiv> */}
    </Routes>
  );
};

export const StyledDiv = styled.div`
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  color: #6150f7;
  -webkit-text-stroke: 0.2px white;
  margin-bottom: 5px;
`;
