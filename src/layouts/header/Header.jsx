import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavLinkItem from "./NavLinkItem/NavLinkItem";
import LinkBtn from "./LinkBtn/LinkBtn";
import Search from "./Search/Search";
import logo from "../../assets/images/logo/logo.svg";

import "./Header.scss";

const Header = () => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        if (e.target.innerText === "Log In") {
            dispatch({ type: "SIGNIN" });
        } else {
            dispatch({ type: "SIGNUP" });
        }
    };

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
                            <NavLinkItem to="/about" name="About" />
                            <NavLinkItem to="/centers" name="Centers" />
                            <NavLinkItem to="/courses" name="Courses" />
                            <NavLinkItem to="/compare" name="Compare" />
                        </ul>
                    </nav>  

                    <div className="header__right">
                        <LinkBtn
                            handleClick={handleClick}
                            to="/auth"
                            name="Log In"
                            className="link-login"
                        />
                        <LinkBtn
                            handleClick={handleClick}
                            to="/auth"
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
