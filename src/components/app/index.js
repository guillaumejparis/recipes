import { h, createContext } from "preact";
import { useReducer, useState, useEffect } from "preact/hooks";
import { Route, Router } from "wouter-preact";
import Fuse from "fuse.js";

import AppBar from "components/appBar";

import recipes from "recipes";

import Home from "routes/home";
import Recipe from "routes/recipe";
import { makeUseRecipesLocation } from "routes/router";

import "./style.scss";

export const recipesFuse = new Fuse(recipes, {
  keys: ["title", "subTitle"],
  minMatchCharLength: 2,
  threshold: 0.4,
});
export const useRecipesLocation = makeUseRecipesLocation("/recipes", true);
export const RecipesContext = createContext();

const recipesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_RECIPES":
      return { ...state, recipes: payload };
    case "SET_HAS_PHOTO":
      return { ...state, hasPhoto: payload };
    default:
      return state;
  }
};

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://choupis.best/static/recipes.json").then(function (response) {
      return response.json().then(function (json) {
        setRecipes(json.recipes);
      });
    });
  }, []);

  return (
    <div styleName="container">
      {recipes.length && (
        <RecipesContext.Provider
          value={useReducer(recipesReducer, { hasPhoto: false, recipes })}
        >
          <AppBar />
          <Router hook={useRecipesLocation}>
            <Route path="/" component={Home} />
            <Route path="/:recipe">
              {({ recipe }) => <Recipe recipe={decodeURI(recipe)} />}
            </Route>
          </Router>
        </RecipesContext.Provider>
      )}
    </div>
  );
};

export default App;
