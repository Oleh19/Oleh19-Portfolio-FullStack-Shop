import { FC } from 'react';
import { motion } from 'framer-motion';
import { delivery, homeBg } from '../../assets/images';
import { buttonClick, staggerFadeInOut } from '../../animations';
import { randomData } from '../../utils/utils';

const Home: FC = () => {
  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="flex items-center justify-center gap-2 bg-red-100 rounded-full px-4 py-1">
          <p className="text-lg font-semibold text-red-500">Free Delivery</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src={delivery}
              alt="Delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold tracking-wider">
          The Best Service in <span className="text-red-600">Pet-Project</span>
        </p>

        <p className="text-textColor text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex laborum
          illo est perspiciatis fuga nemo animi autem ullam, eveniet tenetur
          voluptates amet quo enim libero natus ducimus magni saepe! Amet.
        </p>
        <motion.button
          className="bg-gradient-to-bl from-red-400 to-red-600 px-4 py-2 rounded-xl text-black text-base font-semibold"
          {...buttonClick}
        >
          Order Now
        </motion.button>
      </div>

      <div className="py-2 flex-1 flex items-center justify-end relative">
        <img
          src={homeBg}
          alt="homeBackground"
          className="absolute top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650 rounded-3xl"
        />

        <div className="w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14">
          {randomData &&
            randomData.map((data, index) => (
              <motion.div
                {...staggerFadeInOut(index)}
                key={data.productId}
                className="w-32 h-36 md:h-auto md:w-190 p-4 bg-lightOverlay text-black backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageURL}
                  alt={data.product_name}
                  className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
                />
                <p className="text-sm lg:text-xl font-semibold">
                  {data.product_name.slice(0, 14)}
                </p>
                <p className="text-[12px] text-center md:text-base font-semibold capitalize">
                  {data.product_category}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  {data.product_price}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
