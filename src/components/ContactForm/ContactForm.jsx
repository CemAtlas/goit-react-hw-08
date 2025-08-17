import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    setName("");
    setNumber("");
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input
        className={css.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />{" "}
      <input
        className={css.input}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number"
        required
      />
      <button className={css.btn} type="submit">
        Add
      </button>
    </form>
  );
};
export default ContactForm;