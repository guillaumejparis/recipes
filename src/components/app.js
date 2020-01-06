import { h } from "preact";
import { Route, Router } from "wouter-preact";

import { makeUseRecipesLocation } from "routes/router";
import Home from "routes/home";
import Recipe from "routes/recipe";

const useRecipesLocation = makeUseRecipesLocation("/recipes", true);

const App = () => {
  return (
    <div id="app">
      <Router hook={useRecipesLocation}>
        <Route path="/" component={Home} />
        <Route path="/:recipe">
          {params => <Recipe recipe={params.recipe} />}
        </Route>
      </Router>
    </div>
  );
};

export default App;
