import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Cart, FilterSection, Header, Home, HomeSlider } from '../components';


const Main: FC = () => {
  const isCart = useSelector((state:any) => state.isCart)

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Header />
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <Home />
        <HomeSlider />
        <FilterSection />
      </div>

      {isCart && <Cart />}
    </main>
  );
};

export default Main;
