import AdvantageItem from "./AdvantageItem/AdvantageItem";
import "./Advantages.scss";

const Advantages = () => {
    return (
        <section className="advantage">
            <div className="container">
                <h2 className="advantage__title">advantages website</h2>
                <ul className="advantage__list">
                    <AdvantageItem text="anyone, regardless of your age, can very quickly find any educational center located in Tashkent." />
                    <AdvantageItem text="you can use the map to find any educational center near your home" />
                    <AdvantageItem text="you can get more information with the help of our statistics to better understand about the centers" />
                </ul>
            </div>
        </section>
    );
};

export default Advantages;
