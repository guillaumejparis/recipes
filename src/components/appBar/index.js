import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';

import {
  RecipesContext,
  recipesFuse,
  useRecipesLocation,
} from 'components/app';
import Text from 'components/text';

import { useRecipe } from 'hooks/recipe';
import { useScrolledFromTop } from 'hooks/scroll';

import recipes from 'recipes';

import { getSpacing } from 'theme/themeHelper';

import './style.scss';

const AppBar = () => {
  const [, setRecipes] = useContext(RecipesContext);
  const [, setLocation] = useRecipesLocation();
  const [recipe] = useRecipe();
  const [scrolledFromTop] = useScrolledFromTop(getSpacing());
  const [search, setSearch] = useState(null);

  return (
    <>
      <div styleName="ghost-container" />
      <div
        styleName={`container ${
          scrolledFromTop ? 'container--scrolled-from-top' : ''
        } ${search != null ? 'container--search' : ''}`}
      >
        {search === null ? (
          <>
            <div styleName={`${recipe ? 'left-recipe' : 'left-home'} left`}>
              {recipe ? (
                <button onClick={() => setLocation('/')} styleName="button">
                  <i className="fas fa-home" styleName="icon" />
                </button>
              ) : (
                <Text
                  color={scrolledFromTop ? 'white' : 'app-primary'}
                  variant="h5"
                >
                  Recettes
                </Text>
              )}
            </div>
            {!recipe && (
              <button onClick={() => setSearch('')} styleName="button">
                <i className="fas fa-search" styleName="icon" />
              </button>
            )}
          </>
        ) : (
          <form styleName="form">
            <input
              autoFocus
              onInput={(event) => {
                const { value } = event.target;

                setSearch(value);
                if (value) {
                  setRecipes(recipesFuse.search(value));
                } else {
                  setRecipes(recipes);
                }
              }}
              placeholder="Recherche"
              styleName="input"
              value={search}
            />
            <button
              onClick={() => {
                setSearch(null);
                setRecipes(recipes);
              }}
              styleName="button"
            >
              <i className="fas fa-times" styleName="icon" />
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default AppBar;
