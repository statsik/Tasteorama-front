import clsx from 'clsx';
import css from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';


const handleActiveClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const UserMenu = () => {
  const { name, avatarUrl } = useSelector(selectUser);

  return (
    <div className={css["user-menu-wrapper"]}>
      <div className="user-menu-links">
        <NavLink to="/profile" className={handleActiveClass}>
          My Profile
        </NavLink>
        <NavLink to="/create" className={clsx(css.createLink)}>
          Add Recipe
        </NavLink>
      </div>  
      <div className={clsx(css.avatarNameContainer)}>
          {avatarUrl ? (
            <img className={css.avatar} src={avatarUrl} alt={name} />
          ) : (
            <div className={css.fallbackAvatar}>
              {name
                ?.split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
            </div>
          )}
          <p className={clsx(css.name)}>{name}</p>
        </div>
        <button className={clsx(css.exitButton)}>
          <svg width="24" height="24">
            <use href="/public/icons/icons-tasteorama.svg#icon-icon-exit"></use>
          </svg>
        </button>
      </div>
  );
};

export default UserMenu;