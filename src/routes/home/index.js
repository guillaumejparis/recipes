import { h } from "preact";
import { Link } from "wouter-preact";
import recipes from "recipes";
import "./style";

const Home = () => (
  <div className="home">
    <h1>Recipes</h1>
    <div className="recipes-container">
      {recipes.map(recipe => (
        <div key={recipe}>
          <Link href={`/${recipe.filename}`}>
            <a className="link">{recipe.name}</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
