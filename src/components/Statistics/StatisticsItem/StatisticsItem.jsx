import "./StatisticsItem.scss";

const StatisticsItem = ({ quantity, name }) => {
    return (
        <div className="statistics__item">
            <p className="statistics__item-quantity">{quantity}</p>
            <span className="statistics__item-name">{name}</span>
        </div>
    );
};

export default StatisticsItem;
