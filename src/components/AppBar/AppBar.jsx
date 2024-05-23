import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  return (
    <div>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </div>
  );
}
