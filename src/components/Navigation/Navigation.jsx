import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            className={buildLinkClass}
            to="/"
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              className={buildLinkClass}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};