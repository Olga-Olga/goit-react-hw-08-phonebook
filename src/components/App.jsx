import { styled } from 'styled-components';
import ContactList from './ContactList/ContactList';
import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { FcSmartphoneTablet, FcFilledFilter, FcTodoList } from 'react-icons/fc';
import { selectIsLoading } from 'redux/selector';

export const App = () => {
  const dispatch = useDispatch();

  const load = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
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
