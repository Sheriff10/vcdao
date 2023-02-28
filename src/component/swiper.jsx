import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/virtual';
import { Children } from "react";

export const Swipers = ({children}) => {
  const windowWidth = window.innerWidth
  console.log(children)
  return (
    <>
    {children}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><div className="bg-secondary text-center">{windowWidth}</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="bg-secondary text-center">Slide 1</div></SwiperSlide>
        ...
      </Swiper>
    </>
  );
};
