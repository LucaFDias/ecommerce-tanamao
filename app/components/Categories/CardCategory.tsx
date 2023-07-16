"use client";

import Image from 'next/image'
import ImageProduct01 from '@/app/assets/categories/apple-image.png'
import { motion } from 'framer-motion';
import Link from 'next/link';

const CardCategory = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <Link
          href="categories/id"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="h-[100px] w-[100px] bg-gray-100 border shadow rounded-2xl p-2">
            <Image
              src={ImageProduct01}
              alt="Imagem da categoria"
              className=" h-full w-full object-contain"
            />
          </motion.div>
        </Link>
        <span>Relogios</span>
      </div>
    </section>
  )
}

export default CardCategory