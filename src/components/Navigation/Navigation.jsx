import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export default function Navigation() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {IsLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
