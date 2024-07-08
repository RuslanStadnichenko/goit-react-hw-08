import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectConfirmModal,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { ContactList } from '../../components/ContactList/ContactList';
import s from './Contacts.module.css';
import { ConfirmModal } from '../../components/ConfirmModal/ConfirmModal';
import { fetchContactsThunk } from '../../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const modal = useSelector(selectConfirmModal);

  return (
    <>
      {modal.state && <ConfirmModal />}
      <div className={s.div}>
        <h1 className={s.title}>Phone book</h1>
        <ContactForm />
        <SearchBox />
        {error && <Error />}
        {loading && <Loading />}
        {!error && !loading && <ContactList />}
      </div>
    </>
  );
};

export default Contacts;