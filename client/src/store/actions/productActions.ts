export const setAllProducts = (products: any) => {
  return {
    type: 'SET_ALL_PRODUCTS',
    products: products,
  };
};

export const getAllProducts = (products: any) => {
  return {
    type: 'GET_ALL_PRODUCTS',
  };
};
