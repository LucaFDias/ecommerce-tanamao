"use client";

import Link from "next/link";
import Image from "next/image";
import HeroImg from '../assets/images/imagesProducts/hero-img.png'

import { 
  Col,
  Container, 
  Row 
} from "reactstrap";
import { Button } from "@/components/ui/button";

import Services from "../services/Services";

const Home = () => {

  // const year = new Date().getFullYear()

  return (
    <>
      <section className="bg-sky-200">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="pt-11">
                <p className="hero_subtitle">Produtos seminovos com garantia de 1 ano</p>
                <h2 className="text-5xl font-medium my-4">Torne o seu interior mais minimalista & moderno</h2>
                <p className="text-[#111] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto delectus non, asperiores necessitatibus porro dignissimos vitae voluptate officia iure!</p>

                <Button className="mt-10">
                  <Link
                    className="text-white no-underline"
                    href="/products"
                  >
                    SHOP NOW
                  </Link>
                </Button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero_img">
                <Image
                  src={HeroImg}
                  alt="Banner 1"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services/>
    </>
  )
}

export default Home