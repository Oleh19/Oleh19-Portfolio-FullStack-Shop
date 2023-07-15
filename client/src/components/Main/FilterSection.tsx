import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterCard } from '..';
import { statuses } from '../../utils/utils';
import SliderCard from './HomeSlider/SliderCard';

export interface IStatuses {
    id: number,
    title: string
    category: string
  }

const FilterSection = () => {
  const [category, setCategory] = useState('fruits');
  const products = useSelector((state: any) => state.products);

  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className=" w-full flex items-center justify-between ">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">Our Dishes</p>
          <div className="w-40 h-1 rounded-md bg-orange-500"></div>
        </div>
      </div>

      <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
        {statuses &&
          statuses.map((data:IStatuses, index:number) => (
            <FilterCard
              data={data}
              category={category}
              setCategory={setCategory}
              index={index}
            />
          ))}
      </div>

      <div className=" w-full flex items-center justify-evenly flex-wrap gap-4 mt-12 ">
        {products &&
          products
            .filter((data: any) => data.product_category === category)
            .map((data: any, index:number) => (
              <SliderCard
                key={index}
                data={data}
                index={index}
              />
            ))}
      </div>
    </motion.div>
  );
};

export default FilterSection;