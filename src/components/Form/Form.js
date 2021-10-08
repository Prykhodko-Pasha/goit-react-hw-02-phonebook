import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

export default class Form extends React.Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newId = uuidv4();
    this.setState({ id: newId }, () => {
      this.props.onAddContact(this.state);
      this.reset();
    });
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <br />
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={s.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
