"use client";

import '@/app/styles/home.css'

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

import CounterImg from '@/app/assets/images/imagesProducts/counter-timer-img.png';

import { 
  Col,
  Row,
  Container,
} from "reactstrap";
import { Button } from "@/components/ui/button";
import Slider from '@/app/components/ui/Slider/Slider';

import Clock from "@/app/components/ui/Clock";
import Brands from "@/app/components/Brands/Brands";
import ListProduct from "@/app/components/ui/Product/ListProduct"
import ListCategory from "@/app/components/Categories/ListCategory"

import { BsArrowRight } from "react-icons/bs"

const Home = () => {

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <Slider />
            </Col>
          </Row>
        </Container>
      </section>

      <section className=" mb-3">
        <Container>
          <Row>
            <Col
              lg="12"
              className="mb-3 border-b flex items-center justify-between"
            >
              <h2 className="text-2xl">
                Faça o melhor negócio em{" "}
                <span className="text-sky-500">Smartphones</span>
              </h2>
              <motion.button whileTap={{ scaleX: 1.1 }}>
                <Link
                  className="flex items-center gap-x-2 no-underline text-[#111]"
                  href="#"
                >
                  Ver todos
                  <BsArrowRight className="text-sky-500" />
                </Link>
              </motion.button>
            </Col>
            <Col lg="12">
              <ListProduct />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mb-3">
        <Container>
          <Row>
            <Col
              lg="12"
              className="mb-3 border-b flex items-center justify-between"
            >
              <h2 className="text-2xl">
                Compre nas{" "}
                <span className="text-sky-500">principais categorias</span>
              </h2>
              <motion.button whileTap={{ scaleX: 1.1 }}>
                <Link
                  className="flex items-center gap-x-2 no-underline text-[#111]"
                  href="#"
                >
                  Ver todos
                  <BsArrowRight className="text-sky-500" />
                </Link>
              </motion.button>
            </Col>
            <Col lg="12">
              <ListCategory />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brands Categories */}
      <section className="mb-3">
        <Container>
          <Row>
            <Col
              lg="12"
              className="mb-3 border-b flex items-center justify-between"
            >
              <h2 className="text-2xl">
                Principais{" "}
                <span className="text-sky-500">marcas de eletrônicos</span>
              </h2>
              <motion.button whileTap={{ scaleX: 1.1 }}>
                <Link
                  className="flex items-center gap-x-2 no-underline text-[#111]"
                  href="#"
                >
                  Ver todos
                  <BsArrowRight className="text-sky-500" />
                </Link>
              </motion.button>
            </Col>
            <Brands />
          </Row>
        </Container>
      </section>

      <section className=" mb-3">
        <Container>
          <Row>
            <Col
              lg="12"
              className="mb-3 border-b flex items-center justify-between"
            >
              <h2 className="text-2xl">
                Faça o melhor negócio em{" "}
                <span className="text-sky-500">Smartphones</span>
              </h2>
              <motion.button whileTap={{ scaleX: 1.1 }}>
                <Link
                  className="flex items-center gap-x-2 no-underline text-[#111]"
                  href="#"
                >
                  Ver todos
                  <BsArrowRight className="text-sky-500" />
                </Link>
              </motion.button>
            </Col>
            <ListProduct />
          </Row>
        </Container>
      </section>

      <section className="bg-[#0a1d37] h-80">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top content">
                <h4 className="text-white font-semibold mb-2">
                  Oferta Limitada
                </h4>
                <h3 className="text-white font-medium mb-3">
                  Quality Armchair
                </h3>
              </div>
              <Clock />

              <Button className="mt-10 bg-white">
                <Link
                  className="text-[#0a1d37] no-underline font-bold"
                  href="/products"
                >
                  COMPRAR AGORA
                </Link>
              </Button>
            </Col>
            <Col lg="6" md="6" className="flex justify-end">
              <Image
                src={CounterImg}
                className="w-[70%] h-[70%] object-contain"
                alt="oferta da semana"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg="12" className="mb-3">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ListProduct />
          </Row>
        </Container>
      </section>

      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg="12" className="mb-3">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ListProduct />
          </Row>
        </Container>
      </section>
    </>
  )
};

export default Home;