import { useSelector } from "react-redux";

import "./Centers.scss";
import CenterCard from "../CenterCard/CenterCard";

const Centers = () => {
    const centers = useSelector((state) => state.centers);
    console.log(centers);
    return (
        <section className="centers">
            <div className="container">
                <ul className="centers__list">
                    {centers.map((center) => (
                        <li key={center?.id} className="centers__list-item">
                            <CenterCard center={center} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Centers;
