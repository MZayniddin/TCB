import "./AdvantageItem.scss"

const AdvantageItem = ({ text }) => {
    return (
        <li className="advantage__list-item">
            <p className="advantage__text">{text}</p>
        </li>
    );
};

export default AdvantageItem;
