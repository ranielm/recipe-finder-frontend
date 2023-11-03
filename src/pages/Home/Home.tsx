import { FC, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { IRecipe } from '../../common/types/recipe';
import { Trans } from 'react-i18next';
import RecipeResults from '../../components/RecipeResults';
import RecipeSearch from '../../components/RecipeSearch';

const Home: FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        <Trans>home.title</Trans> 
      </Typography>
      <RecipeSearch onSearch={setRecipes} />
      <RecipeResults recipes={recipes} />
    </Container>
  );
};

export default Home;
