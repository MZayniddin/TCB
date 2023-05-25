import { useDispatch } from "react-redux";
import { RiScalesFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./CourseItem.scss";

const CourseItem = ({ course, link, centerName }) => {
    const dispatch = useDispatch();
    const sendCompare = () => {
        dispatch({ type: "ADD", payload: course });
    };
    return (
        <li className="info-course__list-item">
            <Link to={link}>
                <p className="info-course__name">
                    <strong>{course?.name}</strong>
                </p>
                <div className="info-course__detail">
                    <p>Price: </p> <p>{course?.price}</p>
                </div>
                <div className="info-course__detail">
                    <p>Duration: </p> <p>{course?.course_duration} month</p>
                </div>
                <div className="info-course__detail">
                    <p>Category: </p> <p>{course?.category.name}</p>
                </div>
                {centerName && (
                    <div className="info-course__detail">
                        <p>Academy: </p> <p>{centerName}</p>
                    </div>
                )}
                <RiScalesFill onClick={sendCompare} className="scale" />
            </Link>
        </li>
    );
};

export default CourseItem;
