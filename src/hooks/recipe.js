import { useContext, useEffect, useState } from 'preact/hooks';

import { RecipesContext, useRecipesLocation } from 'components/app';

import recipes from 'recipes';

const useRecipe = () => {
  const [, setRecipes] = useContext(RecipesContext);
  const [recipe, setRecipe] = useState(null);
  const [location] = useRecipesLocation();

  useEffect(() => {
    setRecipe(recipes.find(({ filename }) => location.includes(filename)));
  }, [location]);

  return [recipe, setRecipes];
};

export { useRecipe };
