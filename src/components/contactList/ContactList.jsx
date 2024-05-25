import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/contactSelectors"

export default function ContactList() {
  const shownContacts = useSelector(selectVisibleContacts);
  const contactList = shownContacts.map(({ name, number, id }) => (
    <li key={id} className={css.listItem}>
      <Contact name={name} phoneNumber={number} id={id} />
    </li>
  ));
  return <ul className={css.list}>{contactList}</ul>;
}
