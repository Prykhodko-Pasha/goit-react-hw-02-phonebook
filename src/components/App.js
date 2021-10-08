import React from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import ContactsSearch from './Contacts/ContactsSearch';

export default class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = contact => {
    const isContactExist = this.state.contacts.filter(
      con => con.name === contact.name,
    );
    if (isContactExist.length === 0) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  onSearch = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    let total = contacts.length;
    const filteredContactsArr = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onAddContact={this.onAddContact} />
        </Section>
        <Section title="Contacts">
          {total > 0 ? (
            <>
              <ContactsSearch value={filter} onChange={this.onSearch} />
              <Contacts contactsArr={filteredContactsArr} />
            </>
          ) : (
            <p>No contacts yet</p>
          )}
        </Section>
      </>
    );
  }
}
