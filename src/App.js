import AddContact from "./components/AddContact";
import { ContactListProvider } from "./Context/Contact";

function App() {
  return (
    <ContactListProvider>
      <div className="app-container">
        <AddContact />
      </div>
    </ContactListProvider>
  );
}

export default App;
