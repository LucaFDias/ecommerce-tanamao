import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "@/app/styles/swiper.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardProduct from "./CardProduct";

const ListProduct = () => {

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={4}
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
        className="swiper-container"
      >
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ListProduct;

