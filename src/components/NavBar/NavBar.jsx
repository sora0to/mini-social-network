import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className={style.navBar}>
            <div className={style.navLinks}>
                <NavLink className={style.NavLink} to='/profile'>Profile</NavLink>
                <NavLink className={style.NavLink} to='/messages'>Messages</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;