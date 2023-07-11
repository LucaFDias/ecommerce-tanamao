"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';
import AvatarUser from '@/app/assets/images/user.png'

import { 
  AiOutlineHeart, 
  AiOutlineMenu, 
  AiOutlineShoppingCart
} from 'react-icons/ai';

import { Container, Row } from 'reactstrap';

const Home = () => {
  return (
    <header className="w-full h-[70px] leading-[70px]">
      <Container>
        <Row>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src={Logo} alt="Logo tipo" className="h-[40px] w-[40px]" />
              <div>
                <h1 className="font-semibold text-3xl">TáNaMão</h1>
              </div>
            </div>

            <nav className="navigation">
              <ul className="flex items-center text-black gap-x-11">
                <li className="nav_item">
                  <Link
                    className="no-underline text-black font-semibold"
                    href="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    className="no-underline text-black font-semibold"
                    href="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    className="no-underline text-black font-semibold"
                    href="/home"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-x-5">
              <span className="cart_icons">
                <Image
                  className="w-8 h-8 cursor-pointer"
                  src={AvatarUser}
                  alt="foto do usuário"
                />
              </span>
              <span className="fav_icons">
                <AiOutlineHeart size={24} className="cursor-pointer" />
              </span>
              <span className="cart_icons">
                <AiOutlineShoppingCart size={24} className="cursor-pointer" />
              </span>
            </div>

            {/* Navbar Mobile */}
            <div className="hidden">
              <span className="cursor-pointer">
                <AiOutlineMenu size={24} />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Home;