import { useSelector } from "react-redux";
import "./CentersSlider.scss";

const CentersSlider = () => {
    const centers = useSelector((state) => state.centers);

    return (
        <section className="centers-slider">
            <div className="container">
                <h1 className="centers-slider__title">
                    Best Centers for Study
                </h1>
            </div>
        </section>
    );
};

export default CentersSlider;
