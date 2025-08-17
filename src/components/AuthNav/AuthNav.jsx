import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => (
  <nav className={css.nav}>
    <NavLink
      to="/register"
      className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) => `${css.link} ${isActive ? css.active : ""}`}
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;