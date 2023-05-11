import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import Navigation from "./Navigation/Navigation";
import Newsletter from "./Newsletter/Newsletter";
import Socials from "./Socials/Socials";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__right">
                        <div className="footer__logo">
                            <Link to="/">
                                <img src={logo} alt="Logo TCB" />
                            </Link>
                        </div>
                        <h2 className="footer__sitename">TCB</h2>
                    </div>
                    <Navigation />
                    <Socials />
                    <Newsletter />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
