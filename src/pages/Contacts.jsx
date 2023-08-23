import { ContactsForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { FcFilledFilter, FcSmartphoneTablet, FcTodoList } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selector';
import { styled } from 'styled-components';

export const ContactsPage = () => {
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
