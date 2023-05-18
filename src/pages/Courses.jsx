// import GMap from "../components/GMap/GMap";
import { useDispatch } from "react-redux";
import Course from "../components/Course/Course";
import { getCourses } from "../actions/courses";
import { useEffect } from "react";

const Courses = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    return (
        <main>
            {/* <GMap /> */}
            <Course />
        </main>
    );
};

export default Courses;
