import { staggerFadeInOut } from '../../animations';
import { IoFastFood } from '../../assets/icons';
import { Dispatch, FC, SetStateAction } from 'react';
import { IStatuses } from './FilterSection';
import { motion } from 'framer-motion';

interface FilterCardProps{
    data: IStatuses
    index: number
    category: string
    setCategory: Dispatch<SetStateAction<string>>;
}

export const FilterCard:FC<FilterCardProps> = ({ data, index, category, setCategory }) => {
  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      onClick={() => setCategory(data.category)}
      className={`group w-28 min-w-[128px] cursor-pointer rounded-md  py-6 ${
        category === data.category ? 'bg-red-500' : 'bg-primary'
      } hover:bg-red-500 shadow-md flex flex-col items-center justify-center gap-4`}
    >
      <div
        className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center group-hover:bg-primary ${
          category === data.category ? 'bg-primary' : 'bg-red-500'
        }`}
      >
        <IoFastFood
          className={`${
            category === data.category ? 'text-red-500' : 'text-primary'
          } group-hover:text-red-500`}
        />
      </div>
      <p
        className={`text-xl font-semibold ${
          category === data.category ? 'text-primary' : 'text-textColor'
        } group-hover:text-primary`}
      >
        {data.title}
      </p>
    </motion.div>
  );
};

export default FilterCard