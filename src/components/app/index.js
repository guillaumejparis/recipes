import { h } from 'preact';
import { Route, Router } from 'wouter-preact';

import AppBar from 'components/appBar';

import Home from 'routes/home';
import Recipe from 'routes/recipe';
import { makeUseRecipesLocation } from 'routes/router';

import './style.scss';

export const useRecipesLocation = makeUseRecipesLocation('/recipes', true);

const App = () => {
  return (
    <div styleName="container">
      <AppBar />
      <Router hook={useRecipesLocation}>
        <Route path="/" component={Home} />
        <Route path="/:recipe">
          {({ recipe }) => <Recipe recipe={decodeURI(recipe)} />}
        </Route>
      </Router>
    </div>
  );
};

export default App;
