import clsx from 'clsx';
import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const handleActiveClass = ({ isActive }) => {
  return clsx(css['navLink'], isActive && css['active']);
};

const AuthNav = () => {
  return (
    <div className={css['auth-nav-wrapper']}>
      <NavLink to='/login' className={handleActiveClass}>
        Log in
      </NavLink>
      <NavLink to='/register' className={clsx(css['register-link'])}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
