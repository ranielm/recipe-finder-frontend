import { FC, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  CardMedia,
} from '@mui/material';
import { IRecipeResultsProps } from './RecipeResults.types';
import { IRecipe } from '../../common/types/recipe';
import { RecipeDetailsModal } from '../RecipeDetailsModal';

export const RecipeResults: FC<IRecipeResultsProps> = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <List>
        {recipes.map((recipe) => (
          <ListItem
            key={recipe.id}
            alignItems="flex-start"
            button
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
                    image={recipe.imageUrl || 'placeholder_image_path.jpg'}
                    alt={`Image of ${recipe.title}`}
                  />
                </>
              }
            />
          </ListItem>
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
