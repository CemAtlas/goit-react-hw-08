import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import css from "./Contacts.module.css";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.page}>
      <div className={css.header}>
        <h2 className={css.title}>Contacts</h2>
      </div>
      <div className={css.grid}>
        <div className={css.left}>
          <ContactForm />
          <Filter />
        </div>
        <div className={css.right}>
          <ContactList />
        </div>
      </div>
    </section>
  );
};

export default Contacts;