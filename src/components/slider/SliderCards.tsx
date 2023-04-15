"use client";

import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";

type SliderCardProps = {
  children: any;
};
const SliderCards = ({ children }: SliderCardProps) => {
  return (
    <Swiper
      freeMode={true}
      autoplay={{
        delay: 2000,
      }}
      grabCursor={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay, FreeMode]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SliderCards;
