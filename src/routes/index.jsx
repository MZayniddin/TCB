import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Centers from "../pages/Center";
import Map from "../pages/Map";
import About from "../pages/About";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "centers",
                element: <Centers />,
            },
            {
                path: "map",
                element: <Map />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
