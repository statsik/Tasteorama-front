import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={clsx(css["nav"])}>
        <Link to="/">
            <img src="/public/images/logo.svg" alt="Logo" className={clsx(css["logo"])} />
        </Link>
        <NavLink to='/recipes' className={clsx(css["recipes-nav"])}>
            Recipes
        </NavLink>
      <div className={clsx(css.linkUserMenuAuthNavContainer)}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  );
};

export default Navigation;