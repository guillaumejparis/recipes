import { h } from 'preact';

import theme from 'theme/theme';

const { breakpoint } = theme.theme;

const Image = ({ alt, className, extension, name }) => (
  <picture>
    <source
      srcSet={`${name}-md.${extension}`}
      media={`(min-width: ${breakpoint.sm}px)`}
    />
    <source
      srcSet={`${name}-md.${extension}`}
      media={`(min-width: ${breakpoint.lg}px)`}
    />
    <source
      srcSet={`${name}-lg.${extension}`}
      media={`(min-width: ${breakpoint.xl}px)`}
    />
    <img alt={alt} src={`${name}-sm.${extension}`} className={className} />
  </picture>
);

export default Image;
