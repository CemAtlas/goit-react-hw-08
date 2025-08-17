import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;
  if (!contacts.length) return <p>No contacts</p>;

  return (
    <ul className={css.list}>
      {contacts.map((c) => (
        <Contact key={c.id} contact={c} />
      ))}
    </ul>
  );
};

export default ContactList;