import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
