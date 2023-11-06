import { FC } from 'react';
import { Modal, Typography, Box } from '@mui/material';
import { IRecipe } from '../../common/types/recipe';
import { style } from './RecipeDetailsModal.types';

export const RecipeDetailsModal: FC<{
  recipe: IRecipe;
  open: boolean;
  onClose: () => void;
}> = ({ recipe, open, onClose }) => {
  const instructionSteps = recipe.cookingInstructions.split('\n');

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="recipe-details-title"
      aria-describedby="recipe-details-description"
    >
      <Box sx={style}>
        <Typography id="recipe-details-title" variant="h6" component="h2">
          {recipe.title}
        </Typography>
        <Typography id="recipe-details-description" sx={{ mt: 2 }}>
          Ingredients:{' '}
          {recipe.recipeIngredients
            .map(
              (ri) =>
                `${ri.quantity} ${ri.measurementUnit} ${ri.ingredient.name}`
            )
            .join(', ')}
        </Typography>
        <Typography sx={{ mt: 2 }}>Cooking Instructions:</Typography>
        <List>
          {instructionSteps.map((step, index) => (
            <ListItem key={index}>{step}</ListItem>
          ))}
        </List>
        <img
          src={recipe.imageUrl || 'placeholder_image_path.jpg'}
          alt={`Image of ${recipe.title}`}
          style={{ width: '100%', marginTop: '20px' }}
        />
      </Box>
    </Modal>
  );
};
