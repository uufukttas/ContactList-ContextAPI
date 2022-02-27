import { createContext, useState } from "react";

const ContactListContext = createContext();

export const ContactListProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const fetchData = (data) => {
    setContacts(data);
  };

  return (
    <ContactListContext.Provider value={{ contacts, setContacts, fetchData }}>
      {children}
    </ContactListContext.Provider>
  );
};

export default ContactListContext;
