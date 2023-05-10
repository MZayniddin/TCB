import { Link } from "react-router-dom";

import "./LinkBtn.scss"

const LinkBtn = ({ to, className, name }) => {
    return (
        <Link className={`link-btn ${className}`} to={to}>
            {name}
        </Link>
    );
};

export default LinkBtn;
