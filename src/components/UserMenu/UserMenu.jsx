import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { logout, fetchUserData } from "../../redux/auth/authOps";

export default function UserMenu() {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  const handleGET = () => dispatch(fetchUserData());
  return (
    <div>
      <p>Welcome, {username.name} </p>
      <button type="button" name="logout" onClick={handleLogout}>
        Log out
      </button>
      <button type="button" name="get" onClick={handleGET}>
        get
      </button>
    </div>
  );
}
