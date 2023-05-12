import data from "../../data/about-data.json";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <section className="about">
            <h2 className="about-title">About Us</h2>
            <div className="about-content">
                <div className="container">
                    <ul className="about-content__list">
                        {data.map(({ id, title, data }) => (
                            <li className="about-content__list-item" key={id}>
                                <h4 className="about-content__title">
                                    {title}
                                </h4>
                                {data.map((text, idx) => (
                                    <p
                                        key={idx}
                                        className="about-content__text"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
