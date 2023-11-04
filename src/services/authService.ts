import axios from 'axios';
import { ILoginResponse } from '../common/types/user';
import { apiBaseUrl } from '../utils/environment';

export const loginService = async (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const response = await axios.post(`${apiBaseUrl}/login`, {
      email,
      password,
    });

    const data: ILoginResponse = response.data;

    localStorage.setItem('authToken', data.token);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    } else {
      throw new Error('An error occurred during login');
    }
  }
};
