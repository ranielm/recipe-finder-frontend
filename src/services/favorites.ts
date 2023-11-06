import api from './api';

export const addFavorite = async (recipeID: number) => {
  try {
    const response = await api.post(`/users/recipes/${recipeID}/favorite`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const removeFavorite = async (recipeID: number) => {
  try {
    const response = await api.delete(`/users/recipes/${recipeID}/favorite`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const listFavorites = async () => {
  try {
    const response = await api.get('/users/recipes/favorites');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
