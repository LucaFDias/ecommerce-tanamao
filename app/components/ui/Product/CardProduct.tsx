"use client";

import Image from 'next/image';
import Link from 'next/link';

import RatingUser from '@/app/components/RatingUser/RatingUser';
import ImageProduc01 from '@/app/assets/images/imagesProducts/phone-01.jpg';

const CardProduct = () => {
  return (
    <section>
      <div className="hover:shadow-lg hover:rounded-2xl">
        <Link className="text-black no-underline" href="/products/id">
          <div className="flex relative">
            <div className="absolute top-0 right-0 p-1 bg-sky-500 rounded-tr-2xl rounded-bl-2xl">
              <span className="text-white">
                56% <br />
                OFF
              </span>
            </div>
            <Image
              src={ImageProduc01}
              alt="Imagem do produto"
              className=" w-full h-[200px] object-contain"
            />
          </div>
          <footer className="py-2 px-4 ">
            <span className="text-zinc-400">IPhone</span>
            <div className="flex flex-col mb-3">
              <h3 className="text-lg m-0">Iphone 14 Pro Max Purple 126GB</h3>
              <RatingUser />
            </div>
            <div className="">
              <p className="text-sm m-0 text-gray-400 line-through">
                R$ 2.100,00
              </p>
              <strong className="text-xl text-green-600">R$ 1.900,00</strong>
              <p className="text-sm m-0">ou 10x de R$ 219,00</p>
            </div>
          </footer>
        </Link>
      </div>
    </section>
  )
}

export default CardProduct;