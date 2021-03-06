import { useContext, useEffect, useState } from 'preact/hooks';

import { RecipesContext, useRecipesLocation } from 'components/app';

const useRecipe = () => {
  const [{ recipes }, dispatch] = useContext(RecipesContext);
  const [displayingRecipe, setDisplayingRecipe] = useState(false);
  const [location] = useRecipesLocation();

  useEffect(() => {
    setDisplayingRecipe(
      !!recipes.find(({ filename }) => location.includes(filename))
    );
  }, [location]);

  return [
    displayingRecipe,
    (recipes) => dispatch({ type: 'SET_RECIPES', payload: recipes }),
  ];
};

export { useRecipe };
