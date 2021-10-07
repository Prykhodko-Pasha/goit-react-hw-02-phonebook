import PropTypes from 'prop-types';
import s from './Form.module.css';

export default class Form({ onAddContact }) {
  return (
    <div className={s.form}>
      <p>Name</p>
      <input
        value={this.value}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <button
        type="submit"
        className={s.form__btn}
        onClick={onAddContact(value)}
      >
        Add contact
      </button>
    </div>
  );
}

Form.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.node.isRequired,
};
