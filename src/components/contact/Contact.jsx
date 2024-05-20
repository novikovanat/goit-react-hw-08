import { IoPerson, IoCall } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
export default function Contact({ id, name, phoneNumber }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      <div className={css.contactData}>
        <p>
          <IoPerson className={css.icon} />
          <span>{name}</span>
        </p>
        <p>
          <IoCall className={css.icon} />
          <span>{phoneNumber}</span>
        </p>
      </div>
      <button className={css.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
