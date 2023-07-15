import { FC, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../assets/css/swiperStyle.css';
import 'swiper/css/bundle';
import { useSelector } from 'react-redux';
import { IProducts } from '../../../store/actions/productActions';
import { SliderCard } from '../..';

const Slider: FC = () => {
  const products = useSelector((state: any) => state.products);
  const [fruits, setFruits] = useState<null | IProducts[]>(null);

  const swiperProps = {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    className: 'mySwiper',
  };

  useEffect(() => {
    if (products.length !== 0) {
      setFruits(
        products?.filter(
          (data: IProducts) => data.product_category === 'drinks'
        )
      );
    }
  }, [products]);

  return (
    <div className="w-full pt-24">
      <Swiper {...swiperProps}>
        {fruits &&
          fruits.map((data: IProducts, index) => (
            <SwiperSlide key={index}>
              <SliderCard key={index} data={data} index={index} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
