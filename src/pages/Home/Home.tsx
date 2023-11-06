import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { IRecipe } from '../../common/types/recipe';
import { Trans } from 'react-i18next';
import RecipeResults from '../../components/RecipeResults';
import RecipeSearch from '../../components/RecipeSearch';
import {
  FullHeightContainer,
  StyledContainer,
} from '../../styles/CommonStyles';

const Home: FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  return (
    <FullHeightContainer>
      <StyledContainer component="main" maxWidth="xs">
        <Typography variant="h2" gutterBottom>
          <Trans>home.title</Trans>
        </Typography>
        <RecipeSearch onSearch={setRecipes} />
        <RecipeResults recipes={recipes} />
      </StyledContainer>
    </FullHeightContainer>
  );
};

export default Home;
