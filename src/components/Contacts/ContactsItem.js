import PropTypes from 'prop-types';
// import s from './Contacts.module.css';
// import { FaTrashAlt } from 'react-icons/fa';

export default function ContactsItem({ name, number }) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      {/* <button
        className={ce.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
        >
        <FaTrashAlt size="20px" />
    </button> */}
    </>
  );
}

ContactsItem.propTypes = {
  //   onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
