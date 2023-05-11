import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCenters } from "../actions/centers";

import Centers from "../components/Centers/Centers";

const Center = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCenters());
    }, [dispatch]);
    return (
        <main>
            <Centers />
        </main>
    );
};

export default Center;
