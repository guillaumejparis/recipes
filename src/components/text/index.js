import { h } from 'preact';

import './style.scss';

const Text = ({
  children,
  className,
  color = 'primary',
  component,
  gutterBottom,
  text,
  variant = 'body1',
}) => {
  const content = children || text;
  const styleName = `text ${variant} color-${color} ${
    gutterBottom ? 'gutter-bottom' : ''
  }`;

  if (component === 'h1') {
    return (
      <h1 className={className} styleName={styleName}>
        {content}
      </h1>
    );
  } else if (component === 'h2') {
    return (
      <h2 className={className} styleName={styleName}>
        {content}
      </h2>
    );
  }
  return (
    <p className={className} styleName={styleName}>
      {content}
    </p>
  );
};

export default Text;
