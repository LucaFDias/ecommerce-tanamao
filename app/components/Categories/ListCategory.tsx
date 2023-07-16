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
        slidesPerView={6}
        navigation
        className="swiper-container"
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
