import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactList from "../Components/ContactList";
import Filter from "../Components/Filter";

const ContactsView = () => {
  return (
    <>
      <h1>My Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;