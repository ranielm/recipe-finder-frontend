import { FC, useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IRecipe } from '../../common/types/recipe';
import { listFavorites, removeFavorite } from '../../services/favorites';
import { FullHeightContainer } from '../../styles/CommonStyles';
import { useSnackbar } from 'notistack';

export const FavoritesPage: FC = () => {
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const apiFavorites: IRecipe[] = await listFavorites();
        setFavorites(apiFavorites);
      } catch (error) {
        enqueueSnackbar('Error loading favorite recipes. Try again later.', {
          variant: 'error',
        });
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (
    event: React.MouseEvent<HTMLButtonElement>,
    recipeId: number
  ) => {
    event.stopPropagation();
    try {
      await removeFavorite(recipeId);
      setFavorites(favorites.filter((recipe) => recipe.id !== recipeId));
      enqueueSnackbar('Favorite recipe removed successfully.', {
        variant: 'success',
      });
    } catch (error) {
      enqueueSnackbar('Error removing recipe from favorites. Try again.', {
        variant: 'error',
      });
    }
  };

  return (
    <FullHeightContainer>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {favorites.length > 0 ? (
            favorites.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.imageUrl || 'placeholder_image_path.jpg'}
                    alt={`Image of ${recipe.title}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {recipe.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {recipe.recipeIngredients
                        .map(
                          (ri) =>
                            `${ri.quantity} ${ri.measurementUnit} ${ri.ingredient.name}`
                        )
                        .join(', ')}
                    </Typography>
                    {/* Add more content here if needed */}
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="remove from favorites"
                      onClick={(event) =>
                        handleRemoveFavorite(event, recipe.id)
                      }
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                You still don't have any favorite recipes.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </FullHeightContainer>
  );
};
