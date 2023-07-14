import axios, { AxiosResponse } from 'axios';

export const baseURL: string =
  'http://127.0.0.1:5001/foodshop-2933e/us-central1/app';

export const validateUserJWTToken = async (
  token: string
): Promise<any | null> => {
  try {
    const res: AxiosResponse = await axios.get(
      `${baseURL}/api/users/jwtVerefication`,
      {
        headers: { Authorization: 'Bearer ' + token },
      }
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

export const addNewProduct = async (data: any) => {
  try {
    const res = await axios.post(`${baseURL}/api/products/create`, { ...data });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/all`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const res = await axios.delete(
      `${baseURL}/api/products/delete/${productId}`
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

export const addNewItemToCart = async (user_id: number, data: any) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/addToCart/${user_id}`,
      { ...data }
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};

export const getAllCartItems = async (user_id: number) => {
  try {
    const res = await axios.get(
      `${baseURL}/api/products/getCartItems/${user_id}`
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};

export const increaseItemQuantity = async (
  user_id: number,
  productId: number,
  type: string
) => {
  console.log(user_id, productId, type);
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateCart/${user_id}`,
      null,
      { params: { productId: productId, type: type } }
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};
