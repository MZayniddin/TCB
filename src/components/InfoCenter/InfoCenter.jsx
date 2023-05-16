import { useParams, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import CenterCard from "../CenterCard/CenterCard";

import "./InfoCenter.scss";

const InfoCenter = () => {
    const { id } = useParams();
    const center = useSelector((state) =>
        state.centers.find((center) => center.id == id)
    );

    return (
        <section className="info">
            <div className="container">
                {center && <CenterCard center={center} />}
                <h2 className="info-title">Courses</h2>
                <ul className="info-course__list">
                    {center?.courses?.map((course) => (
                        <li key={course?.id} className="info-course__list-item">
                            <p className="info-course__name">
                                <strong>{course?.name}</strong>
                            </p>
                            <div className="info-course__detail">
                                <p>Price: </p> <p>{course?.price}</p>
                            </div>
                            <div className="info-course__detail">
                                <p>Duration: </p>{" "}
                                <p>{course?.course_duration} month</p>
                            </div>
                            <div className="info-course__detail">
                                <p>Category: </p> <p>{course?.category.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default InfoCenter;
