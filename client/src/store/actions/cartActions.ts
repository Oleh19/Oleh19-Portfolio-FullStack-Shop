import { IProducts } from "./productActions";

export const setCartItems = (items:IProducts) => {
    return {
      type: "SET_CART_ITEMS",
      items: items,
    };
  };
  
  export const getCartItems = () => {
    return {
      type: "GET_CART_ITEMS",
    };
  };
  
  export const clearCartItems = () => {
    return {
      type: "CLEAR_CART_ITEMS",
      items: null,
    };
  };