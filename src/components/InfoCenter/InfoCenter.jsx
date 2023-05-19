import { useParams, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import CenterCard from "../CenterCard/CenterCard";

import "./InfoCenter.scss";
import CourseItem from "../CourseItem/CourseItem";

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
                        <CourseItem key={course.id} course={course} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default InfoCenter;
