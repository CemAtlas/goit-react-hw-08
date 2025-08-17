import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;