import "./CourseTypes.scss";

const CourseTypes = () => {
    return (
        <section className="course-type">
            <div className="container">
                <h2 className="course-type__title">
                    Choose the course that suits you
                </h2>
                <ul className="course-type__list">
                    <li className="course-type__list-item">
                        <p className="course-type__name">
                            <strong>Mathematics</strong>
                        </p>
                        <p className="course-type__text">
                            everyone should know mathematics in order to reach
                            heights in the field of their dreams.
                        </p>
                    </li>
                    <li className="course-type__list-item">
                        <p className="course-type__name">
                            <strong>English</strong>
                        </p>
                        <p className="course-type__text">
                            everyone must know English to be able to travel and
                            work freely. Good time to start here and now
                        </p>
                    </li>
                    <li className="course-type__list-item">
                        <p className="course-type__name">
                            <strong>Mathematics</strong>
                        </p>
                        <p className="course-type__text">
                            everyone should know mathematics in order to reach
                            heights in the field of their dreams.
                        </p>
                    </li>
                    <li className="course-type__list-item">
                        <p className="course-type__name">
                            <strong>English</strong>
                        </p>
                        <p className="course-type__text">
                            everyone must know English to be able to travel and
                            work freely. Good time to start here and now
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CourseTypes;
