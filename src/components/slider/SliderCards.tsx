"use client";

import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

type SliderCardProps = {
  children: any;
};
const SliderCards = ({ children }: SliderCardProps) => {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    breakpoints={{
      0:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView:4
      }


    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    }}
    autoplay={
      {delay: 3000}
    }
    pagination={{clickable: true }}
    navigation={true}
    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    className="swiper_container"
    >
      {children}
    </Swiper>
  );
};

export default SliderCards;
