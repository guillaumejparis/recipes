import { h } from 'preact';
import { useLocation } from 'wouter-preact';

import Card from 'components/card';

import recipes from 'recipes';

import styles from './style.scss';

const Home = () => {
  const [, setLocation] = useLocation();

  return (
    <div styleName="container">
      <div styleName="recipes-container">
        {recipes.map(({ filename, photo, title, subTitle }) => (
          <Card
            className={styles.card}
            image={photo}
            key={title}
            onClick={() => setLocation(`/${filename}`)}
            title={title}
            subTitle={subTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
