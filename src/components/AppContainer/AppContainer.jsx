import { useAuth } from "../../hooks/useAuth";
import { Navigation } from "../Navigation/Navigation";
import css from "./AppContainer.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

// In conspect it is AppBar

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
