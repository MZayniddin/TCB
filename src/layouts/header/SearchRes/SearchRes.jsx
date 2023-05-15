import "./SearchRes.scss";
import { Link } from "react-router-dom";

const SearchRes = ({ centers }) => {
    return (
        <div className="search-res">
            <ul className="search-res__list">
                {centers.map((center) => (
                    <li key={center.id} className="search-res__list-item">
                        <Link
                            className="search-res__link"
                            to={`detail/${center.id}`}
                        >
                            <img
                                className="search-res__img"
                                src={center?.image}
                                alt={center?.name}
                            />
                            <div className="search-res__center-info">
                                <div className="search-res__title">
                                    {center?.name}
                                </div>
                                <span className="search-res__subname">
                                    {center?.main_course?.name}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
                {!centers.length && (
                    <li>
                        <span className="search-res__subname">
                            Nothing Found
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchRes;
