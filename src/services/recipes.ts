import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const fetchRecipes = async (ingredients: string) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/recipes/search`, {
      params: { ingredients },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
