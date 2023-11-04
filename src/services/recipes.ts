import api from './api';

export const fetchRecipes = async (ingredients: string) => {
  try {
    const response = await api.get('/recipes/search', {
      params: { ingredients },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
