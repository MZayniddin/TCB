import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCenters } from "../actions/centers";

import CentersSlider from "../components/CentersSlider/CentersSlider";
import Intro from "../components/Intro/Intro";
import Statistics from "../components/Statistics/Statistics";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCenters());
    }, [dispatch]);

    return (
        <main>
            <Intro />
            <Statistics />
            <CentersSlider />
        </main>
    );
};

export default Home;
