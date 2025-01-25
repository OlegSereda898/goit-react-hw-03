import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsData from "./contacts.json";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox onSearch={setSearchQuery} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
