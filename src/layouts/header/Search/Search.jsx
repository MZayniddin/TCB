import { useDispatch, useSelector } from "react-redux";
import { searchCenter } from "../../../actions/centers";
import { useEffect, useState } from "react";
import "./Search.scss";
import SearchRes from "../SearchRes/SearchRes";

const Search = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");
    const [resultDivActive, setResultDivActive] = useState(false);
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        if (searchInput.length !== 0) {
            dispatch(searchCenter(searchInput));
        }
    }, [searchInput, dispatch]);

    const centers = useSelector((state) => state.centers);

    return (
        <>
            <div
                onMouseOver={() => {
                    setResultDivActive(true);
                }}
                onMouseLeave={() => {
                    setResultDivActive(false);
                }}
                className="search-wrapper"
            >
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
                {searchInput && resultDivActive && (
                    <SearchRes centers={centers} />
                )}
            </div>
        </>
    );
};

export default Search;
