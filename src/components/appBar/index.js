import { h } from 'preact';
import { useLocation } from 'wouter-preact';

import Text from 'components/text';

import { useRecipe } from 'hooks/recipe';

import './style.scss';

const AppBar = () => {
  const [, setLocation] = useLocation();
  const [recipe] = useRecipe();

  return (
    <>
      <div styleName="ghost-container" />
      <div styleName="container">
        <div onClick={() => setLocation(`/recipes/`)} styleName="left">
          {recipe ? (
            <i className="fas fa-home" styleName="home" />
          ) : (
            <Text color="white" variant="h5">
              Recettes
            </Text>
          )}
        </div>
      </div>
    </>
  );
};

export default AppBar;
