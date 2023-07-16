"use client";

import '@/app/styles/header.css';

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { 
  Container,
  Row, 
} from "reactstrap";
import { Badge } from "@mui/material";
import Headroom from 'react-headroom';

import Navbar from './Navbar';
import InputSearch from '@/app/components/ui/Input/InputSearch';
import AvatarMenu from '@/app/components/Avatar/AvatarMenu';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  return (
    <>
      <header className="z-10 flex items-center h-20 mb-2">
        <Headroom
          className="w-full p-2"
          style={{
            background: "#fff",
            zIndex: 50,
            height: "80px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Row>
              <div className="flex items-center justify-between">
                {/* Navbar Mobile */}
                <div className="hidden nav_mobile" style={{ zIndex: 100 }}>
                  <NavbarMobile/>
                </div>

                {/* Logotipo */}
                <div className="flex items-center gap-x-2">
                  <Link href="/" className="flex no-underline text-gray-700">
                    <Image
                      src={Logo}
                      alt="Logo tipo"
                      className="h-[40px] w-[40px] img_logo"
                    />
                    <h1 className="font-semibold text-3xl title_logo">
                      TáNaMão
                    </h1>
                  </Link>
                </div>

                {/* Input serach */}
                <InputSearch />

                <div className="flex items-center gap-x-5">
                  <AvatarMenu

                  />
                  <button>
                    <Badge badgeContent={4} color="primary">
                      <AiOutlineHeart size={32} className="cursor-pointer" />
                    </Badge>
                  </button>
                  <button>
                    <Badge badgeContent={4} color="primary">
                      <AiOutlineShoppingCart
                        size={32}
                        className="cursor-pointer"
                      />
                    </Badge>
                  </button>
                </div>
              </div>
            </Row>
          </Container>
        </Headroom>
      </header>
      <Container>
        <Row>
          <Navbar/>
        </Row>
      </Container>
    </>
  )
};

export default Header
