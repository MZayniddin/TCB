import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";

import "./StatisticsItem.scss";
import { useState } from "react";

const Number = ({ n }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 100,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const StatisticsItem = ({ quantity, name }) => {
    const [animateOn, setAnimateOn] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setAnimateOn(true)}
            onExit={() => setAnimateOn(false)}
        >
            <div className="statistics__item">
                <div className="statistics__item-quantity">
                    {animateOn && <Number n={+quantity} />} +
                </div>
                <span className="statistics__item-name">{name}</span>
            </div>
        </ScrollTrigger>
    );
};

export default StatisticsItem;
