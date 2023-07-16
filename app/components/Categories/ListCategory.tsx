import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/swiper.css";

import CardCategory from "./CardCategory"

const ListCategory = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={8}
        navigation
        breakpoints={{
          992: {
            width: 992,
            slidesPerView: 4,
          },

          768: {
            width: 768,
            slidesPerView: 3,
          },
          576: {
            width: 576,
            slidesPerView: 2,
          },
          375: {
            width: 375,
            slidesPerView: 1,
          },
        }}
        className="swiper-container flex items-center justify-center"
      >
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ListCategory
