/* Core */
import { NavLink } from 'react-router-dom';

/* Icons */
import { icons } from '../theme/icons/nav';

export const Nav = () => {
    return (
        <nav className='nav'>
            <h1>Т и Т</h1>
            <NavLink to='/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to='/topics-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to='/'>
                <icons.Publish /> Опубликовать
            </NavLink>
            <NavLink to='/'>
                <icons.Settings /> Настройки
            </NavLink>
            <NavLink to='/'>
                <icons.Login /> Войти
            </NavLink>
            <NavLink to='/'>
                <icons.Profile /> Профиль
            </NavLink>
            <NavLink to='/'>
                <icons.Logout /> Выйти
            </NavLink>
        </nav>
    );
}
