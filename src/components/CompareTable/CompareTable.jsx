import { useSelector } from "react-redux";
import "./CompareTable.scss";

const CompareTable = () => {
    const compares = useSelector((state) => state.compares);

    console.log(compares);
    return (
        <section className="comparing">
            <div className="container">
                <h1 className="comparing__title">Compare Courses</h1>
                <table className="comparing-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Course Duration</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compares.map(
                            ({
                                id,
                                name,
                                category,
                                course_duration,
                                price,
                            }) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{category.name}</td>
                                    <td>{course_duration} month</td>
                                    <td>{price} UZS</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CompareTable;
