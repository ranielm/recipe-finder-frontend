import { FC } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { IRecipeResultsProps } from './RecipeResults.types';

const RecipeResults: FC<IRecipeResultsProps> = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <ListItem key={recipe.id} alignItems="flex-start">
          <ListItemText
            primary={recipe.title}
            secondary={
              <span>
                {recipe.recipeIngredients
                  .map(
                    (ri) =>
                      `${ri.quantity} ${ri.measurementUnit} ${ri.ingredient.name}`
                  )
                  .join(', ')}
              </span>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RecipeResults;
