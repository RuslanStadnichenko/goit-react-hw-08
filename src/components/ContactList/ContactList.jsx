import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';

import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};