export interface IProducts {
  productId: number;
  imageURL: string;
  product_name: string;
  product_category: string;
  product_price: string;
}

export const setAllProducts = (products: IProducts[]) => {
  return {
    type: 'SET_ALL_PRODUCTS',
    products: products,
  };
};

export const getAllProducts = (products: IProducts) => {
  return {
    type: 'GET_ALL_PRODUCTS',
  };
};
