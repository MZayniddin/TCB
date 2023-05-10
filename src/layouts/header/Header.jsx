import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import NavLinkItem from "./NavLinkItem/NavLinkItem";
import LinkBtn from "./LinkBtn/LinkBtn";
import Search from "./Search/Search";

import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header__left">
                        <div className="header-logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <Search />
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav__list">
                            <NavLinkItem to="/" name="Home" />
                            <NavLinkItem to="/centers" name="Centers" />
                            <NavLinkItem to="/map" name="Map" />
                        </ul>
                    </nav>

                    <div className="header__right">
                        <LinkBtn
                            to="/login"
                            name="Log In"
                            className="link-login"
                        />
                        <LinkBtn
                            to="/signup"
                            name="Sign Up"
                            className="link-signup"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
