import { FC, useEffect, useState } from 'react';
import {
  List,
  ListItemText,
  Typography,
  CardMedia,
  ListItemButton,
  IconButton,
} from '@mui/material';
import { IRecipeResultsProps } from './RecipeResults.types';
import { IRecipe } from '../../common/types/recipe';
import { RecipeDetailsModal } from '../RecipeDetailsModal';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  addFavorite,
  listFavorites,
  removeFavorite,
} from '../../services/favorites';

export const RecipeResults: FC<IRecipeResultsProps> = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const apiFavorites: IRecipe[] = await listFavorites();
        setFavorites(apiFavorites.map((fav) => fav.id));
      } catch (error) {
        console.error('Erro ao carregar receitas favoritas', error);
      }
    };

    fetchFavorites();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async (
    event: React.MouseEvent<HTMLButtonElement>,
    recipeId: number
  ) => {
    event.stopPropagation();
    const isFavorite = favorites.includes(recipeId);
    let updatedFavorites: number[] = [];

    if (isFavorite) {
      updatedFavorites = favorites.filter((id) => id !== recipeId);
      try {
        await removeFavorite(recipeId);
      } catch (error) {
        console.error('Erro ao remover a receita dos favoritos', error);
      }
    } else {
      try {
        await addFavorite(recipeId);
        updatedFavorites = [...favorites, recipeId];
      } catch (error) {
        console.error('Erro ao adicionar a receita aos favoritos', error);
      }
    }

    setFavorites(updatedFavorites);
  };

  return (
    <>
      <List>
        {recipes.map((recipe) => (
          <ListItemButton
            key={recipe.id}
            alignItems="flex-start"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <ListItemText
              primary={recipe.title}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {recipe.recipeIngredients
                      .map(
                        (ri) =>
                          `${ri.quantity} ${ri.measurementUnit} ${ri.ingredient.name}`
                      )
                      .join(', ')}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.imageUrl || ''}
                    alt={`Image of ${recipe.title}`}
                  />
                </>
              }
            />
            <IconButton onClick={(event) => toggleFavorite(event, recipe.id)}>
              {favorites.includes(recipe.id) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </ListItemButton>
        ))}
      </List>
      {selectedRecipe && (
        <RecipeDetailsModal
          recipe={selectedRecipe}
          open={Boolean(selectedRecipe)}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default RecipeResults;
