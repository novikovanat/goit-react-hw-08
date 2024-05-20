import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors"

export default function ContactList() {
  const shownContacts = useSelector(selectVisibleContacts);
  const contactList = shownContacts.map(({ name, phoneNumber, id }) => (
    <li key={id} className={css.listItem}>
      <Contact name={name} phoneNumber={phoneNumber} id={id} />
    </li>
  ));
  return <ul className={css.list}>{contactList}</ul>;
}
