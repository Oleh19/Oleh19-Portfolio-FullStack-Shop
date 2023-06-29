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
