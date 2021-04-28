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
        </nav>
    )
}