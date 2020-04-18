import { h } from 'preact';

import Text from 'components/text';

import './style.scss';

const Card = ({ className, image, onClick, title, subTitle }) => (
  <div styleName="container" className={className} onClick={onClick}>
    {image && (
      <picture>
        <source
          srcSet={`${image.name}-sm.${image.extension}`}
          media="(min-width: 600px)"
        />
        <source
          srcSet={`${image.name}-md.${image.extension}`}
          media="(min-width: 960px)"
        />
        <source
          srcSet={`${image.name}-lg.${image.extension}`}
          media="(min-width: 1280px)"
        />
        <img
          alt={title}
          src={`${image.name}-sm.${image.extension}`}
          styleName="image"
        />
      </picture>
    )}
    <div styleName="content">
      <Text component="h2" gutterBottom variant="h5">
        {title}
      </Text>
      <Text color="secondary" variant="body2">
        {subTitle}
      </Text>
    </div>
  </div>
);

export default Card;
