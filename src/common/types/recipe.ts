export interface IIngredient {
  id: number;
  name: string;
  description: string;
}

export interface IRecipeIngredient {
  id: number;
  quantity: string;
  measurementUnit: string;
  ingredient: IIngredient;
}

export interface IRecipe {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  recipeIngredients: IRecipeIngredient[];
  cookingInstructions: string;
  imageUrl: string;
}
