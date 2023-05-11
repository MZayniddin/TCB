import "./Socials.scss";
import {
    FaInstagram,
    FaYoutube,
    FaFacebookMessenger,
    FaTelegram,
} from "react-icons/fa";

const Socials = () => {
    return (
        <div className="socials">
            <strong className="footer__box-title">Social Networks</strong>
            <ul className="socials__list">
                <li className="socials__list-item">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="socials-link"
                    >
                        <FaInstagram className="socials-icon" />
                    </a>
                </li>
                <li className="socials__list-item">
                    <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noreferrer"
                        className="socials-link"
                    >
                        <FaTelegram className="socials-icon" />
                    </a>
                </li>
                <li className="socials__list-item">
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        className="socials-link"
                    >
                        <FaYoutube className="socials-icon" />
                    </a>
                </li>
                <li className="socials__list-item">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="socials-link"
                    >
                        <FaFacebookMessenger className="socials-icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
