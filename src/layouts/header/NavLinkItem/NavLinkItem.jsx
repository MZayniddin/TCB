import { NavLink } from "react-router-dom";

import "./NavLinkItem.scss";
import { useSelector } from "react-redux";

const NavLinkItem = ({ to, name, badge }) => {
    const courses = useSelector(state => state.compares)
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
            {
                badge && courses.length && (
                    <span className="badge">
                        {
                            courses.length
                        }
                    </span>    
                )
            }
        </li>
    );
};

export default NavLinkItem;
