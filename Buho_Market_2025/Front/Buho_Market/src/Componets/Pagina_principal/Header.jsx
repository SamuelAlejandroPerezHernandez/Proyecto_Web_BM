function Header() {
    return (
        <header className="web__header">
        <div className="header__presentation">
            <img className="web__logo" src="../img/new_logo.jpeg" alt="web__logo"/>
            <h1 className="web__name">Buho <span>Market</span></h1>
        </div>
        <div className="buscador__menu">
            <div className="input__conteiner">
                <input className="input__search" type="text" placeholder="Buscar...."/>
                <div className="search__icon__container">
                    <img className="search__icon" src="../img/lupa.png" alt="search_icon"/>
                </div>
            </div>
            <div className="menu">
                <img className="menu__open" src="../img/lines.png"/>
                <img className="menu__close" src="../img/green lines2.png"/>
            </div>
        </div>
        <nav className="drop__down">
            <div className="drop__down__wrapper">
                <div className="user__info">
                    <img className="user__foto" src="../img/user.png"/>
                    <h2 className="user__name">USER NAME</h2>
                </div>
                <ul className="nav__list__item">
                    <li className="nav_item">
                        <img className="nav__img"/>
                        <a className="nav_link" href="#">Inicio</a>
                    </li>
                    <li className="nav_item">
                        <img className="nav__img"/>
                        <a className="nav_link" href="#">Perfil</a>
                    </li>
                    <li className="nav_item">
                        <img className="nav__img"/>
                        <a className="nav_link" href="#">Categorías</a>
                    </li>
                    <li className="nav_item">
                        <img className="nav__img"/>
                        <a className="nav_link" href="#">Publicar</a>
                    </li>
                    <li className="nav_item">
                        <img className="nav__img"/>
                        <a className="nav_link" href="#">Metodos de pago</a>
                    </li>
                    <li className="nav_item">
                        <img className="nav__img"/>
                        <a className="nav_link" href="#">Subscripcion</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>


    );
}

export default Header;