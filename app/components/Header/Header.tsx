"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";
import AvatarUser from "@/app/assets/images/user.png";

import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { Badge } from "@mui/material";
import { Container, Row } from "reactstrap";

import ListNav from "./ListNav";

const Header = () => {

  return (
    <header className="w-full h-[70px] leading-[70px]">
      <Container>
        <Row>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src={Logo} alt="Logo tipo" className="h-[40px] w-[40px]" />
              <Link href="/" className="flex no-underline text-gray-700">
                <h1 className="font-semibold text-3xl">TáNaMão</h1>
              </Link>
            </div>

            <ListNav />

            <div className="flex items-center gap-x-5">
              <span className="avatar_icons">
                <Image
                  className="w-8 h-8 cursor-pointer"
                  src={AvatarUser}
                  alt="foto do usuário"
                />
              </span>
              <span className="fav_icons">
                <Badge badgeContent={4} color="primary">
                  <AiOutlineHeart size={32} className="cursor-pointer" />
                </Badge>
              </span>
              <span className="cart_icons">
                <Badge badgeContent={4} color="primary">
                  <AiOutlineShoppingCart size={32} className="cursor-pointer"/>
                </Badge>
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
  );
};

export default Header
