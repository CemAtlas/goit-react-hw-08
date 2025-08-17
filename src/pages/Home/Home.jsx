import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <section className={css.hero}>
      <div className={css.inner}>
        <h1 className={css.title}>Contacts App</h1>
        <p className={css.subtitle}>
          Register or log in to manage your personal contacts.
        </p>

        {isLoggedIn ? (
          <div className={css.actions}>
            <span className={css.welcome}>
              Welcome{user?.name ? `, ${user.name}` : ""}!
            </span>
            <Link className={`${css.btn} ${css.primary}`} to="/contacts">
              Go to your contacts
            </Link>
          </div>
        ) : (
          <div className={css.actions}>
            <Link className={`${css.btn} ${css.primary}`} to="/register">
              Create an account
            </Link>
            <Link className={`${css.btn} ${css.ghost}`} to="/login">
              Log in
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;