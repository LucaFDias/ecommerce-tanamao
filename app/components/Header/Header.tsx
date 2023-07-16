"use client";

import '@/app/styles/header.css';

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { User } from 'lucide-react';

import { 
  Container,
  Row, 
} from "reactstrap";
import { Badge } from "@mui/material";
import Headroom from 'react-headroom';

import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
} from '@/components/ui/sheet';

import AccordionList from './AccordionList';
import Navbar from './Navbar';
import InputSearch from '@/app/components/ui/Input/InputSearch';
import AvatarMenu from '@/app/components/Avatar/AvatarMenu';

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
                  <Sheet>
                    <SheetTrigger asChild>
                      <button className="flex items-center">
                        <AiOutlineMenu size={32} />
                      </button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle className="flex text-sm text-[#111] gap-x-4">
                          <User size={32} />
                          <div className="flex flex-col">
                            <Link
                              href="/login"
                              className="text-[#111] no-underline"
                            >
                              <span>Bem vindo(a) à Loja TáNaMão</span>
                            </Link>
                            <Link href="/login" className="flex text-[#111]">
                              <span>Acesse sua conta </span>
                            </Link>
                          </div>
                        </SheetTitle>
                      </SheetHeader>
                      <div className="flex flex-col gap-2 py-2">
                        <div className="flex justify-between items-center gap-2">
                          <AccordionList />
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
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
