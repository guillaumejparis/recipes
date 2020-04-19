import { h } from 'preact';

import { useRecipesLocation } from 'components/app';
import Image from 'components/image';
import Text from 'components/text';

import { useRecipe } from 'hooks/recipe';

import styles from './style.scss';

const AppBar = () => {
  const [, setLocation] = useRecipesLocation();
  const [recipe] = useRecipe();

  return (
    <>
      <div styleName="ghost-container" />
      <div styleName="container">
        <div
          onClick={() => setLocation('/')}
          styleName={`${recipe ? 'left-recipe' : 'left-home'} left`}
        >
          {recipe ? (
            <button styleName="button">
              <i className="fas fa-home" styleName="home-icon" />
            </button>
          ) : (
            <Text color="white" variant="h5">
              Recettes
            </Text>
          )}
        </div>
        <div styleName={`${recipe?.photo ? 'right-image' : ''} right`}>
          {recipe?.photo && (
            <Image
              alt={recipe.title}
              className={styles.image}
              {...recipe.photo}
            />
          )}
          {!recipe && (
            <button styleName="button">
              <i className="fas fa-search" styleName="search-icon" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AppBar;
