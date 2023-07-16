import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
} from '@/components/ui/sheet';

import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import CartCard from './CartCard'

const CartSidebar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center">
            <AiOutlineShoppingCart size={32} className="cursor-pointer" />
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-x-4">
              <FaShoppingCart />
              <span>
                Meu Carrinho (0)
              </span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2 py-2">
            <CartCard />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default CartSidebar