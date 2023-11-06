import { FC } from 'react';
import {
  Dialog,
  Typography,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IRecipeDetailsModalProps } from './RecipeDetailsModal.types';
import { StyledModalBox } from './RecipeDetailsModal.styled';

export const RecipeDetailsModal: FC<IRecipeDetailsModalProps> = ({
  recipe,
  open,
  onClose,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const instructionSteps = recipe.cookingInstructions.split('\n');

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="recipe-details-title"
      aria-describedby="recipe-details-description"
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
    >
      <StyledModalBox>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
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
        <List dense>
          {instructionSteps.map((step, index) => (
            <ListItem key={index}>{step}</ListItem>
          ))}
        </List>
        <Box
          component="img"
          src={recipe.imageUrl || 'placeholder_image_path.jpg'}
          alt={`Image of ${recipe.title}`}
        />
      </StyledModalBox>
    </Dialog>
  );
};
