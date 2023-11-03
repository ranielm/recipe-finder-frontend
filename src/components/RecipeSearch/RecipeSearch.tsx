import { useState, useEffect, FC } from 'react';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IRecipeSearchProps } from '../RecipeSearch/RecipeSearch.types';
import { fetchRecipes } from '../../services/recipes';

const RecipeSearch: FC<IRecipeSearchProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const searchTerms = input.trim();
      if (searchTerms) {
        fetchRecipes(searchTerms)
          .then((recipes) => {
            onSearch(recipes);
          })
          .catch(() => {
            onSearch([]);
          });
      } else {
        onSearch([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [input, onSearch]);

  return (
    <TextField
      label={t('home.enter_ingredients')}
      variant="outlined"
      fullWidth
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={t('home.placeholder_ingredients')}
    />
  );
};

export default RecipeSearch;
