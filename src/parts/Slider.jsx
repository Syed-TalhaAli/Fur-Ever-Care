import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
    "sliders/1.png",
    "sliders/2.png",
];

const Slider = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
                delay: 2000,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide className="slide">
                <img src={images[0]} alt="Slide 1" />
            </SwiperSlide>

            <SwiperSlide className="slide">
                <img src={images[1]} alt="Slide 2" />
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Slider;
