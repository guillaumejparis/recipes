import { h } from "preact";
import { useContext } from "preact/hooks";
import { useLocation } from "wouter-preact";

import { RecipesContext } from "components/app";
import Card from "components/card";
import Text from "components/text";

import styles from "./style.scss";

const Home = () => {
  const [{ hasPhoto, recipes }] = useContext(RecipesContext);
  const [, setLocation] = useLocation();

  return (
    <div styleName="container">
      <Text className={styles.title} color="app-primary" variant="title">
        Basilic
      </Text>
      <div styleName="recipes-container">
        {recipes.map((recipe) => {
          const { filename, url, photo, tags, title, subTitle } =
            recipe.item || recipe;
          return (
            <Card
              className={styles.card}
              image={hasPhoto && photo}
              key={title}
              onClick={() => {
                if (filename) {
                  setLocation(`/${filename}`);
                } else {
                  window.open(url, "_blank");
                }
              }}
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
