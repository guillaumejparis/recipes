import { h } from "preact";
import { Link } from "wouter-preact";
import "./style";

const Home = () => (
  <div className="home">
    <h1>Recipes</h1>
    <div className="recipes-container">
      <div>
        <Link href="/fraise">
          <a className="link">Fraise</a>
        </Link>
      </div>
      <div>
        <Link href="/mure">
          <a className="link">Mure</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
