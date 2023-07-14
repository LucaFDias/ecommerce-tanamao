import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

import { Col } from 'reactstrap';

interface ProductCardProps {
  item: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  item
}) => {

  return (
    <Col lg="3" md="4" className='mb-2'>
      {
        <div className="border rounded cursor-pointer hover:shadow">
          <motion.div
            className="flex items-center p-1 object-cover"
            whileHover={{ scale: 0.9 }}
          >
            <Image src={item.imgUrl} alt="Produto" />
          </motion.div>
          <div className="p-2">
            <h3 className="text-xl font-semibold mt-4">
              <Link
                href={`/products/${item.id}`}
                className="text-[#111] no-underline"
                >
                {item.productName}
              </Link>
            </h3>
            <span className="text-sm">{item.category}</span>
          </div>
          <div className="flex items-center justify-between p-2">
            <span className="text-green-500 text-lg font-medium">
              R$ {item.price}
            </span>
            <motion.span whileTap={{ scale: 1.2 }}>
              <PlusCircle size={24} className="text-[#111]" />
            </motion.span>
          </div>
        </div>
      }
    </Col>
  )
};

export default ProductCard;