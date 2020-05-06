import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { useLocation } from 'wouter-preact';

import { RecipesContext } from 'components/app';
import Card from 'components/card';

import styles from './style.scss';

const Home = () => {
  const [recipes] = useContext(RecipesContext);
  const [, setLocation] = useLocation();

  return (
    <div styleName="container">
      <div styleName="recipes-container">
        {recipes.map((recipe) => {
          const { filename, photo, tags, title, subTitle } =
            recipe.item || recipe;
          return (
            <Card
              className={styles.card}
              image={photo}
              key={title}
              onClick={() => setLocation(`/${filename}`)}
              tags={tags}
              title={title}
              subTitle={subTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
