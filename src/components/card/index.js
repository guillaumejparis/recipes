import { h } from 'preact';

import Image from 'components/image';
import Text from 'components/text';

import styles from './style.scss';

const Card = ({ className, image, onClick, title, subTitle }) => (
  <div styleName="container" className={className} onClick={onClick}>
    {image && <Image alt={title} className={styles.image} {...image} />}
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
