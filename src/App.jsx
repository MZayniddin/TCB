import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCenters } from "./actions/centers";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

function App() {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        dispatch(getCenters());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
