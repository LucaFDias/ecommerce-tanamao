"use client";

import Link from "next/link";
import Image from "next/image";
import HeroImg from '@/app/assets/images/imagesProducts/hero-img.png';
import CounterImg from '@/app/assets/images/imagesProducts/counter-timer-img.png'

import { 
  Col,
  Row,
  Container, 
} from "reactstrap";
import { Button } from "@/components/ui/button";
import Services from "@/app/components/services/Services";

import products from "@/app/data/product";
import { useState, useEffect } from "react";
import Clock from "@/app/components/ui/Clock";
import ProductsList from "@/app/components/ui/ProductsList";

const Home = () => {
  const [ bestSales, setBestSales ] = useState(products);
  const [ mobileProducts, setMobileProducts ] = useState(products);
  const [ popularProducts, setPopularProducts ] = useState(products);
  const [ wirelessProducts, setWirelessProducts ] = useState(products);
  const [ trendingProducts, setTrendingProducts ] = useState(products);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSales = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobilesProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setBestSales(filteredBestSales);
    setMobileProducts(filteredMobilesProducts);
    setPopularProducts(filteredPopularProducts);
    setWirelessProducts(filteredWirelessProducts);
    setTrendingProducts(filteredTrendingProducts);
  }, []);

  return (
    <>
      <section className="bg-sky-200">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="pt-11">
                <p className="hero_subtitle">
                  Produtos seminovos com garantia de 1 ano
                </p>
                <h2 className="text-5xl font-medium my-4">
                  Torne o seu interior mais minimalista & moderno
                </h2>
                <p className="text-[#111] leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae iusto delectus non, asperiores necessitatibus porro
                  dignissimos vitae voluptate officia iure!
                </p>

                <Button className="mt-10">
                  <Link className="text-white no-underline" href="/products">
                    SHOP NOW
                  </Link>
                </Button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <Image src={HeroImg} alt="Banner 1" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending_products mb-3">
        <Container>
          <Row>
            <Col lg="12" className="mb-3">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="sales_products mb-3">
        <Container>
          <Row>
            <Col lg="12" className="mb-3">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={bestSales} />
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
                  className="text-[#0a1d37] no-underline font-semibold"
                  href="/products"
                >
                  SHOP NOW
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
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg="12" className="mb-3">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;