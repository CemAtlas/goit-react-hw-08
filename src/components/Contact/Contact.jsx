import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.card}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.number}>{contact.number}</p>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;