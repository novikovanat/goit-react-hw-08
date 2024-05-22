import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsState } from "../../redux/contacts/contactSelectors";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";
import ContactList from "../../components/contactList/ContactList";

export default function ContactsPage() {
  const { item, isLoading, error } = useSelector(selectContactsState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {item.length > 0 && <ContactList />}

      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
