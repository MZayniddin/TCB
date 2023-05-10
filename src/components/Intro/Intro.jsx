import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";

import "./Intro.scss";

const Intro = () => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro-inner">
                    <h2 className="intro-title">
                        See a part of the next big thing
                    </h2>
                    <p className="intro-subtitle">
                        Smart Living Style for Smart People
                    </p>
                    <Link className="intro-link" to="/centers">
                        View All Centers <TbArrowNarrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
