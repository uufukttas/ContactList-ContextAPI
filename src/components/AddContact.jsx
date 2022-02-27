import { useState, useContext } from "react";
import ContactListContext from "../Context/Contact";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { contacts, fetchData } = useContext(ContactListContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    contacts.push({
      name,
      phone,
    });

    fetchData(contacts);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" onChange={handleNameChange} value={name} />

      <label htmlFor="phone">Phone: </label>
      <input
        type="text"
        name="phone"
        onChange={handlePhoneChange}
        value={phone}
      />

      <input type="submit" value="Add" />
    </form>
  );
}

export default AddContact;
