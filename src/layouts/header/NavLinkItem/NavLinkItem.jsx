import { NavLink } from "react-router-dom";

const NavLinkItem = ({ to, name }) => {
    return (
        <li className="header-nav__list-item">
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "header-nav__list-link active"
                        : "header-nav__list-link"
                }
                to={to}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default NavLinkItem;
