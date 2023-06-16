import axios from 'axios';

export const baseURL = 'http://127.0.0.1:5001/foodshop-2933e/us-central1/app';

export const validateUserJWTToken = async (
  token: string
): Promise<any | null> => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtVerefication`, {
      headers: { Authorization: 'Bearer ' + token },
    });
    return res.data.data;
  } catch (err) {
    return null;
  }
};
