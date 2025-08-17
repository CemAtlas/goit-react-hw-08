import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <span className={css.name}>Hello, {user?.name}</span>
      <button className={css.btn} onClick={() => dispatch(logOut)}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;