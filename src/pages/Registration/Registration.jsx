import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css";

const Registration = () => (
  <section className={css.page}>
    <div className={css.card}>
      <h2 className={css.title}>Register</h2>
      <RegistrationForm />
    </div>
  </section>
);

export default Registration;