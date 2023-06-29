import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../api';
import { setAllProducts } from '../../store/actions/productActions';
import { CChart } from '@coreui/react-chartjs';

const DBHome: FC = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const drinks = products?.filter(
    (item: any) => item.product_category === 'drinks'
  );
  const deserts = products?.filter(
    (item: any) => item.product_category === 'deserts'
  );
  const fruits = products?.filter(
    (item: any) => item.product_category === 'fruits'
  );
  const rice = products?.filter(
    (item: any) => item.product_category === 'rice'
  );
  const curry = products?.filter(
    (item: any) => item.product_category === 'curry'
  );
  const chinese = products?.filter(
    (item: any) => item.product_category === 'chinese'
  );
  const bread = products?.filter(
    (item: any) => item.product_category === 'bread'
  );

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }

    console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  'Drinks',
                  'Deserts',
                  'Fruits',
                  'Rice',
                  'Curry',
                  'Bread',
                  'Chinese',
                ],
                datasets: [
                  {
                    label: 'Category wise Count',
                    backgroundColor: '#f87979',
                    data: [
                      drinks?.length,
                      deserts?.length,
                      fruits?.length,
                      rice?.length,
                      curry?.length,
                      chinese?.length,
                      bread?.length,
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  'Drinks',
                  'Deserts',
                  'Fruits',
                  'Rice',
                  'Curry',
                  'Bread',
                  'Chinese',
                ],
                datasets: [
                  {
                    backgroundColor: [
                      '#51FF00',
                      '#00B6FF',
                      '#008BFF',
                      '#FFD100',
                      '#FF00FB',
                      'white',
                      'red',
                    ],
                    data: [
                      drinks?.length,
                      deserts?.length,
                      fruits?.length,
                      rice?.length,
                      curry?.length,
                      chinese?.length,
                      bread?.length,
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
