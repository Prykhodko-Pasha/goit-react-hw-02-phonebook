import React from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';

export default class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  static propTypes = {};

  onAddContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.push(contact),
    }));
  };

  render() {
    let total = this.state.contacts.length;
    // let positivePercentage = Math.round((this.state.good / total) * 100);
    // const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Form onAddContact={this.onAddContact} />
        </Section>
        <Section title="Contacts">
          {total > 0 ? (
            <Contacts contactsArr={this.state.contacts} />
          ) : (
            <p>No contacts yet</p>
          )}
        </Section>
      </>
    );
  }
}
