import PropTypes from 'prop-types';

export default function ContactsSearch({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

ContactsSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
