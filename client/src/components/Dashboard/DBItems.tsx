import { HiCurrencyRupee } from '../../assets/icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, getAllProducts } from '../../api';
import { alertNull, alertSuccess } from '../../store/actions/alertActions';
import { setAllProducts } from '../../store/actions/productActions';
import DataTable from './DataTable';

const DBItems = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: 'Image',
            field: 'imageURL',
            render: (rowData: any) => (
              <img
                src={rowData.imageURL}
                alt={rowData.product_name}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: 'Name',
            field: 'product_name',
          },
          {
            title: 'Category',
            field: 'product_category',
          },
          {
            title: 'Price',
            field: 'product_price',
            render: (rowData: any) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center ">
                <HiCurrencyRupee className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Data',
            onClick: (event: any, rowData: any) => {
              alert('You want to edit ' + rowData.productId);
            },
          },
          {
            icon: 'delete',
            tooltip: 'Delete Data',
            onClick: (event: any, rowData: any) => {
              if (
                window.confirm('Are you sure, you want to perform this aciton')
              ) {
                deleteProduct(rowData.productId).then((res: any) => {
                  dispatch(alertSuccess('Product Deleted '));
                  setInterval(() => {
                    dispatch(alertNull());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data));
                  });
                });
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
