import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import Button from "../Button/Button";

export default function UserMenu() {
  const username = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {username.name} </p>
      <Button buttonType="button" buttonName="logOut" buttonValue="Log out" />
    </div>
  );
}
