import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import css from "./UserMenu.module.css";

// It is menu for logged in user:
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}>logOut</button> */}
    </div>
  );
};
