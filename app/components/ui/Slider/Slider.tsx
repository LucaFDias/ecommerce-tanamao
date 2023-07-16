"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { 
  Swiper,
  SwiperSlide
} from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules"

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import productImg01 from "@/app/assets/banners/banner1.png"
import productImg02 from "@/app/assets/banners/banner2.png"
import productImg03 from "@/app/assets/banners/banner3.png"
import productImg04 from "@/app/assets/banners/banner4.png"
import productImg05 from "@/app/assets/banners/banner5.png"
import productImg06 from "@/app/assets/banners/banner6.png"
import productImg07 from "@/app/assets/banners/banner7.png"
import productImg08 from "@/app/assets/banners/banner8.png"

const Slider = () => {

  return (
    <div className="z-[-10]">
      <Swiper
        className="border-0 h-full w-full"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        centeredSlides
        loop
        navigation
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg01}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg02}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg03}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg04}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg05}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg06}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg07}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="#">
              <Image
                src={productImg08}
                alt="productImg01"
                className="rounded border-0 object-cover"
              />
            </Link>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
