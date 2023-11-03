import { IRecipe } from '../../common/types/recipe';

export interface IRecipeSearchProps {
  onSearch: (recipes: IRecipe[]) => void;
}
