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

