import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsItem from './ContactsItem';

export default function Contacts({ contactsArr }) {
  return (
    <ul className={s.contacts__list}>
      {contactsArr.map(({ id, name }) => (
        <li key={id} className={s.contacts__item}>
          <ContactsItem name={name} />
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  // onDeleteContact: PropTypes.func.isRequired,
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // number: PropTypes.string.isRequired,
    }),
  ),
};
