"use client";

import Link from 'next/link';
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

import { 
  Col, 
  Row, 
  Container,
  ListGroup,
  ListGroupItem, 
} from 'reactstrap';
import { 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import HiperImg from "@/app/assets/cards/hipercard.png";
import VisaImg from '@/app/assets/cards/visa.png';
import MasterImg from '@/app/assets/cards/mastercard.png';
import EloImg from '@/app/assets/cards/elo.png';
import PixImg from "@/app/assets/cards/pix.png";
import BoletoImg from "@/app/assets/cards/boleto.png"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="pt-[60px] pb-[30px] bg-[#ebebeb]">
      <Container>
        <Row>
          <Col lg="4">
            <div className="flex items-center gap-x-4">
              <Image src={Logo} alt="Logo tipo" className="h-[40px] w-[40px]" />
              <Link href="/" className="flex no-underline text-gray-700">
                <h1 className="font-semibold text-3xl">TáNaMão</h1>
              </Link>
            </div>
            <div className="flex items-center mt-3 gap-x-4">
              <Link href="#" className="text-black">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-black">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-black">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-black">
                <FaWhatsapp size={24} />
              </Link>
            </div>
            <p className="footer-text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick_links">
              <h4 className="quick_links-title">Sobre Nós</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Sobre a TáNaMão
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Política de Privacidade
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Regulamentos
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Blog
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer_quick_links">
              <h4 className="quick_links-title">Ajuda</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Trocas e devoluções
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Prazos de entregas
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Pagamentos
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Meus Pedidos
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quick_links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Mobile Phones
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Morden sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Arm Chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 bg-transparent text-sm p-1">
                  <Link href="#" className="text-black no-underline">
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col
            lg="12"
            mg="3"
            className="flex items-center justify-center gap-x-5 mb-3"
          >
              <Image src={PixImg} alt="Pix" className="w-[50px]" />
              <Image src={MasterImg} alt="MasterCard" className="w-[50px]" />
              <Image src={HiperImg} alt="HiperCard" className="w-[50px]" />
              <Image src={VisaImg} alt="VisaCard" className="w-[50px]" />
              <Image src={EloImg} alt="EloCard" className="w-[50px]" />
              <Image src={BoletoImg} alt="BoletoCard" className="w-[50px] " />
          </Col>
        </Row>
      </Container>

      <div className="flex flex-col items-center justify-items-center text-zinc-400 border-t pt-[30px] border-black">
        <span className="text-sm">
          TáNaMão 2017-{year} &copy; - atendimento@lojatanamao.com, CNPJ
          00.000.000/0001-01
        </span>
      </div>
    </footer>
  )
}

export default Footer