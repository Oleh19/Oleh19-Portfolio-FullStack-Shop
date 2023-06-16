import axios from 'axios';

export const baseURL = 'http://localhost:5001/foodshop-2933e/us-central1/app';

export const validateUserJWTToken = async (token: any) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtVerefication`, {
      headers: { Authorization: 'Bearer ' + token },
    });
    return res.data.data;
  } catch (err) {
    return null;
  }
};
