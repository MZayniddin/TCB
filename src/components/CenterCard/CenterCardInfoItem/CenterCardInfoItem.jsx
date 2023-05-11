import "./CenterCardInfoItem.scss";

const CenterCardInfoItem = ({ name, info }) => {
    return (
        <li className="center-card__info-item">
            <div className="center-card__info-left">
                <p className="center-card__info-name">{name}: </p>
            </div>
            <div className="center-card__info-right">
                <p className="center-card__info-res">{info}</p>
            </div>
        </li>
    );
};

export default CenterCardInfoItem;
