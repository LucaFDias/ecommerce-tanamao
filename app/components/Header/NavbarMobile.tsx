"use client"

import "@/app/styles/header.css";

import Link from "next/link";

import {
  AiOutlineMenu,
} from "react-icons/ai";
import { User } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import AccordionList from "./AccordionList";

const NavbarMobile = () => {
  return (
    <>
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
                <Link href="/login" className="text-[#111] no-underline">
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
    </>
  );
};

export default NavbarMobile;
