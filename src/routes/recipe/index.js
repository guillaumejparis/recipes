import { h } from "preact";
import { Link } from "wouter-preact";
import Markdown from "preact-markdown";
import "./style";

const Recipe = ({ recipe }) => (
  <div className="recipe">
    <Link href="/">
      <a className="link">Home</a>
    </Link>
    <Markdown markdown={require(`recipes/${recipe}`)} />
  </div>
);

export default Recipe;
