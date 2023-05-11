import "./CenterCard.scss";
import CenterCardInfoItem from "./CenterCardInfoItem/CenterCardInfoItem";

const CenterCard = ({
    center: { image, name, slug, center_address, top_teachers },
}) => {
    return (
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
                    <CenterCardInfoItem name="Type Courses" info={slug} />
                    <CenterCardInfoItem
                        name="Students"
                        info={`${top_teachers[0]?.number_students}+`}
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
    );
};

export default CenterCard;
