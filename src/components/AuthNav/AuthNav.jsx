import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';
export const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <ul className={s.list}>
      <li>
        <NavLink
          to="/login"
          className={buildLinkClass}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={buildLinkClass}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};