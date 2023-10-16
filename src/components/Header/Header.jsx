import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logoContainer}>
                <div className={style.logo}>LOG0</div>
            </div>
        </header>
    );
}

export default Header;