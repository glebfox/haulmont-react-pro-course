/* Icons */
import { icons } from '../theme/icons/nav';

export const Nav = () => {
    return (
        <nav className='nav'>
            <h1>Т и Т</h1>
            <a href='#'>
                <icons.Home /> Все темы
            </a>
            <a>
                <icons.Tag /> По тэгам
            </a>
            <a>
                <icons.Publish /> Опубликовать
            </a>
            <a>
                <icons.Settings /> Настройки
            </a>
            <a>
                <icons.Login /> Войти
            </a>
            <a>
                <icons.Profile /> Профиль
            </a>
            <a>
                <icons.Logout /> Выйти
            </a>
        </nav>
    )
}