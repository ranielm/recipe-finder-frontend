import { FC } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { IRecipeResultsProps } from './RecipeResults.types';

const RecipeResults: FC<IRecipeResultsProps> = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <ListItem key={recipe.id}>
          <ListItemText
            primary={recipe.title}
            secondary={recipe.ingredients.join(', ')}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RecipeResults;
