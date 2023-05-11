import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import CenterCard from "../CenterCard/CenterCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./CentersSlider.scss";
import { Link } from "react-router-dom";

const CentersSlider = () => {
    const centers = useSelector((state) => state.centers);

    return (
        <section className="centers-slider">
            <div className="container">
                <h1 className="centers-slider__title">
                    Best Centers for Study
                </h1>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    effect={"coverflow"}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="centers-swiper"
                >
                    {centers.map((center) => (
                        <SwiperSlide
                            key={center.id}
                            className="centers-swiper__item"
                        >
                            <CenterCard center={center} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="centers-slider__link">
                    <Link to="centers">List of Best Centes</Link>
                </div>
            </div>
        </section>
    );
};

export default CentersSlider;
