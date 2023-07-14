import { alertNull, alertSuccess } from '../../store/actions/alertActions';
import { setCartItems } from '../../store/actions/cartActions';
import { buttonClick, staggerFadeInOut } from '../../animations';
import { getAllCartItems, increaseItemQuantity } from '../../api';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { HiCurrencyRupee } from '../../assets/icons';
import { UserState } from '../../store/reducers/userReducer';
import {ICartItems} from './Cart'

interface CartItemCardProps {
    index: number;
    data: ICartItems;
    }

const CartItemCard: FC<CartItemCardProps> = ({ index, data }) => {
  const cart = useSelector((state: any) => state.cart);
  const user = useSelector((state: UserState) => state.user);
  const [itemTotal, setItemTotal] = useState(0);
  const dispatch = useDispatch();

  const decrementCart = (productId:number) => {
    dispatch(alertSuccess('Updated the cartitem'));

    increaseItemQuantity(user?.user_id, productId, 'decrement').then((data) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
        dispatch(alertNull());
      });
    });
  };

  const incrementCart = (productId:number) => {
    dispatch(alertSuccess('Updated the cartitem'));
    increaseItemQuantity(user?.user_id, productId, 'increment').then((data) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
        dispatch(alertNull());
      });
    });
  };

  useEffect(() => {
    const productPrice = parseInt(data.product_price);
    const quantity = parseInt(data.quantity);
    
    setItemTotal(productPrice * quantity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemTotal, cart]);

  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      className="w-full flex items-center justify-start bg-zinc-800 rounded-md drop-shadow-md px-4 gap-4"
    >
      <img
        src={data?.imageURL}
        className=" w-24 min-w-[94px] h-24 object-contain"
        alt=""
      />

      <div className="flex items-center justify-start gap-1 w-full">
        <p className="text-lg text-primary font-semibold">
          {data?.product_name}
          <span className="text-sm block capitalize text-gray-400">
            {data?.product_category}
          </span>
        </p>
        <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-400 ml-auto">
          <HiCurrencyRupee className="text-red-400" /> {itemTotal}
        </p>
      </div>

      <div className="ml-auto flex items-center justify-center gap-3">
        <motion.div
          {...buttonClick}
          onClick={() => decrementCart(data?.productId)}
          className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
        >
          <p className="text-xl font-semibold text-primary">--</p>
        </motion.div>
        <p className="text-lg text-primary font-semibold">{data?.quantity}</p>
        <motion.div
          {...buttonClick}
          className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
          onClick={() => incrementCart(data?.productId)}
        >
          <p className="text-xl font-semibold text-primary">+</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartItemCard;
