import { IRecipe } from '../../common/types/recipe';

export interface IRecipeDetailsModalProps {
  recipe: IRecipe;
  open: boolean;
  onClose: () => void;
}
