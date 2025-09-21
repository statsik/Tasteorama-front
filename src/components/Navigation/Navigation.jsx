import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
  import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //const isLoggedIn = true;

  return ( 
    <nav className={clsx(css["nav"])}>
      <div className={clsx(css["nav-recipes"])}>
        <Link to="/">
            <img src="/images/logo.svg" alt="Logo" className={clsx(css["logo"])} />
        </Link>
      </div>
      <button className={clsx(css["nav-burger"])}>
        <svg width="24" height="24">
          <use href="/public/icons/icons-tasteorama.svg#icon-burger-regular"></use>
        </svg>
      </button>
      <div className={clsx(css.linkUserMenuAuthNavContainer)}>
        <NavLink to='/recipes' className={clsx(css["recipes-nav"])}>
            Recipes
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  );
};

export default Navigation;