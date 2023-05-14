import StatisticsItem from "./StatisticsItem/StatisticsItem";

import "./Statistics.scss";

const Statistics = () => {
    return (
        <section className="statistics">
            <div className="container">
                <h3 className="statistics__title">Statistics</h3>
                <div className="statistics__content">
                    <StatisticsItem quantity="120" name="Centers" />
                    <StatisticsItem quantity="2200" name="Teachers" />
                    <StatisticsItem quantity="500" name="Branches" />
                    <StatisticsItem quantity="300" name="Cources" />
                    <StatisticsItem quantity="430" name="Spend time" />
                    <StatisticsItem quantity="3000" name="Active Users" />
                </div>
            </div>
        </section>
    );
};

export default Statistics;
