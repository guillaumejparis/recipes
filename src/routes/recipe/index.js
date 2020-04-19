import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Markdown from 'preact-markdown';

import './github-markdown.scss';
import './style.scss';

const Recipe = ({ recipe }) => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    import(
      /* webpackChunkName: "recipe-[request]" */ `recipes/${recipe}`
    ).then(({ default: markdown }) => setMarkdown(markdown));
  }, []);
  return (
    <div styleName="container">
      <div styleName="markdown-body">
        {markdown && <Markdown markdown={markdown} />}
      </div>
    </div>
  );
};

export default Recipe;
