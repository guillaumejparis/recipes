import { useEffect, useState } from 'preact/hooks';

import { useRecipesLocation } from 'components/app';

import recipes from 'recipes';

const useRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [location] = useRecipesLocation();

  useEffect(() => {
    setRecipe(recipes.find(({ filename }) => location.includes(filename)));
  }, [location]);

  return [recipe];
};

export { useRecipe };
