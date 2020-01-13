import { h } from "preact";
import { Link } from "wouter-preact";
import Markdown from "preact-markdown";
import "./style";
import "./github-markdown.css";

const Recipe = ({ recipe }) => (
  <div className="recipe">
    <Link href="/">
      <a className="link">Home</a>
    </Link>
    <div className="markdown-body">
      <Markdown markdown={require(`recipes/${recipe}`)} />
    </div>
  </div>
);

export default Recipe;
