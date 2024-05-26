import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOps";
import { Button } from "@mui/material";
// import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function UserMenu() {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  return (
    <div>
      <p>Welcome, {username.name} </p>
      <Button onClick={handleLogout} variant="outlined" type="button" startIcon={<LogoutOutlinedIcon/>}>
        Log out
      </Button>
    </div>
  );
}
