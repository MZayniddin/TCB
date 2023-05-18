import { useSelector } from "react-redux";
import "./Course.scss";

const Course = () => {
    const courses = useSelector((state) => state.courses);

    return (
        <section className="course">
            <div className="container">
                <h2 className="course__title">Courses</h2>
                <ul className="courses__list"></ul>
            </div>
        </section>
    );
};

export default Course;
