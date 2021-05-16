import { h } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import Fuse from "fuse.js";

import { RecipesContext, useRecipesLocation } from "components/app";

import { usePrevious } from "hooks/common";
import { useRecipe } from "hooks/recipe";
import { useScrolledFromTop } from "hooks/scroll";

import { getSpacing } from "theme/themeHelper";

import "./style.scss";

const AppBar = () => {
  const [, setLocation] = useRecipesLocation();
  const [displayingRecipe, setRecipes] = useRecipe();
  const [{ hasPhoto, recipes }, dispatch] = useContext(RecipesContext);
  const [scrolledFromTop] = useScrolledFromTop(getSpacing());
  const [search, setSearch] = useState(null);
  const inputRef = useRef(null);
  const prevSearch = usePrevious(search);

  const recipesFuse = new Fuse(recipes, {
    keys: ["title", "subTitle"],
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  useEffect(() => {
    if (search !== null) {
      setSearch(null);
      setRecipes(recipes);
    }
  }, [displayingRecipe]);
  // As there is a bug on chromium engine (https://crbug.com/1046357) we need to focus by ourselves
  useEffect(() => {
    if (prevSearch === null && search !== null) {
      inputRef.current.focus();
    }
  }, [search]);

  if (displayingRecipe) {
    return (
      <>
        <div styleName="ghost-container" />
        <div
          styleName={`container ${
            scrolledFromTop ? "container--scrolled-from-top" : ""
          } ${search != null ? "container--search" : ""}`}
        >
          {search === null ? (
            <>
              <div
                styleName={`${
                  displayingRecipe ? "left-recipe" : "left-home"
                } left`}
              >
                {displayingRecipe && (
                  <button onClick={() => setLocation("/")} styleName="button">
                    <i className="fas fa-home" styleName="icon" />
                  </button>
                )}
              </div>
              {!displayingRecipe && (
                <div>
                  <button
                    onClick={() =>
                      dispatch({ type: "SET_HAS_PHOTO", payload: !hasPhoto })
                    }
                    styleName="button"
                  >
                    <i
                      className="fas fa-images"
                      styleName={`icon ${!hasPhoto ? "icon-grayed-out" : ""}`}
                    />
                  </button>
                  <button onClick={() => setSearch("")} styleName="button">
                    <i className="fas fa-search" styleName="icon" />
                  </button>
                </div>
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
                ref={inputRef}
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
  }
  return null;
};

export default AppBar;
