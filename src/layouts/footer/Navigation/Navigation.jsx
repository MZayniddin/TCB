import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="footer__navigation">
            <strong className="footer__box-title">Navigation</strong>
            <ul className="footer__navigation__list">
                <li className="footer__navigation__list-item">
                    <Link className="footer__navigation-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="footer__navigation__list-item">
                    <Link className="footer__navigation-link" to="/about">
                        About Us
                    </Link>
                </li>
                <li className="footer__navigation__list-item">
                    <Link className="footer__navigation-link" to="/centers">
                        Centers
                    </Link>
                </li>
                <li className="footer__navigation__list-item">
                    <Link className="footer__navigation-link" to="/map">
                        Map
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
