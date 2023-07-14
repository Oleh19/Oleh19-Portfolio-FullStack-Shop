import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider } from '../..';
import { getAllProducts } from '../../../api';
import { setAllProducts } from '../../../store/actions/productActions';


const HomeSlider: FC = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, [products.length, dispatch]);

  return (
    <motion.div className="w-full flex items-center justify-start flex-col">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">Our Products</p>
          <div className="w-40 h-1 rounded-md bg-red-500"></div>
        </div>
      </div>

      <Slider />
    </motion.div>
  );
};

export default HomeSlider;
