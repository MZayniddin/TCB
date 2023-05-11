import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer"
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
