import { Link } from "react-router-dom";
import CenterCardInfoItem from "./CenterCardInfoItem/CenterCardInfoItem";
import "./CenterCard.scss";

const CenterCard = ({
    center: {
        image,
        name,
        slug,
        center_address,
        number_students,
        main_course,
        id,
    },
}) => {
    return (
        <Link to={`/detail/${id}`}>
            <article className="center-card">
                <div className="center-card__image">
                    <img src={image} alt={name} />
                </div>
                <div className="center-card__content">
                    <h1 className="center-card__name">{name}</h1>
                    <strong className="center-card__subname">{slug}</strong>

                    <ul className="center-card__info">
                        <CenterCardInfoItem
                            name="Branches"
                            info={center_address?.apartment_number}
                        />
                        <CenterCardInfoItem
                            name="Type Courses"
                            info={main_course?.name}
                        />
                        <CenterCardInfoItem
                            name="Students"
                            info={`${number_students}+`}
                        />
                        <li className="center-card__info-item">
                            <p className="center-card__info-distriction">
                                {`${center_address?.apartment_number} ${center_address?.street} ${center_address?.district}`}
                                <br />
                                <span>Tashkent, Uzbekistan</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </article>
        </Link>
    );
};

export default CenterCard;
