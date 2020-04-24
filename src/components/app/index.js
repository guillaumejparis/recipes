import { h, createContext } from 'preact';
import { useState } from 'preact/hooks';
import { Route, Router } from 'wouter-preact';
import Fuse from 'fuse.js';

import AppBar from 'components/appBar';

import recipes from 'recipes';

import Home from 'routes/home';
import Recipe from 'routes/recipe';
import { makeUseRecipesLocation } from 'routes/router';

import './style.scss';

export const recipesFuse = new Fuse(recipes, {
  keys: ['title', 'subTitle'],
  minMatchCharLength: 2,
  threshold: 0.4,
});
export const useRecipesLocation = makeUseRecipesLocation('/recipes', true);
export const RecipesContext = createContext({
  recipes: [],
  setRecipes: () => {},
});

const App = () => {
  return (
    <div styleName="container">
      <RecipesContext.Provider value={useState(recipes)}>
        <AppBar />
        <Router hook={useRecipesLocation}>
          <Route path="/" component={Home} />
          <Route path="/:recipe">
            {({ recipe }) => <Recipe recipe={decodeURI(recipe)} />}
          </Route>
        </Router>
      </RecipesContext.Provider>
    </div>
  );
};

export default App;
