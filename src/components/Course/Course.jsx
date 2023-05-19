import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourses } from "../../actions/courses";

import Slider from "rc-slider";
import CourseItem from "../CourseItem/CourseItem";

import "./Course.scss";
import "rc-slider/assets/index.css";

const Course = () => {
    const courses = useSelector((state) => state.courses);
    const [price, setPrice] = useState([100000, 10000000]);
    const [coursesType, setCoursesType] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses(price, coursesType));
    }, [dispatch, price, coursesType]);

    const handleChange = (e) => {
        setPrice(e);
    };

    return (
        <section className="course">
            <div className="container">
                <h2 className="course__title">Courses</h2>
                <div className="filter">
                    <Slider
                        range
                        marks={{
                            100000: `100 000 UZS`,
                            10000000: `10 000 000 UZS`,
                        }}
                        className="filter-slider"
                        min={100000}
                        max={10000000}
                        defaultValue={[100000, 10000000]}
                        onChange={handleChange}
                        value={price}
                        tipFormatter={value => `UZS ${value}`}
                        tipProps={{
                            placement: "top",
                            visible: true
                        }}
                    />
                    <select className="filter-select" onChange={(e) => setCoursesType(e.target.value)}>
                        <option value="">All</option>
                        <option value="Language">Language</option>
                        <option value="Programming">Programming</option>
                    </select>
                </div>
                <ul className="course__list info-course__list">
                    {courses.map((course) => (
                        <CourseItem
                            key={course.id}
                            course={course}
                            // link={`/detail/${center.id}`}
                            // centerName={center.name}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Course;
