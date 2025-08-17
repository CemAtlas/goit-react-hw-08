import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

const Login = () => (
  <section className={css.page}>
    <div className={css.card}>
      <h2 className={css.title}>Login</h2>
      <LoginForm />
    </div>
  </section>
);

export default Login;