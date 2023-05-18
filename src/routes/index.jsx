import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Centers from "../pages/Center";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Detail from "../pages/Detail";

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
                path: "courses",
                element: <Courses />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "detail/:id",
                element: <Detail />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
