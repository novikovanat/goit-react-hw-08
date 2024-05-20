import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors"
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.flex}>
      Find contacts by name
      <input name="search" value={filter.name} onInput={handleFilter}></input>
    </label>
  );
}
