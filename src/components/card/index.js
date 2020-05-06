import { h } from 'preact';

import Chip from 'components/chip';
import Divider from 'components/divider';
import Image from 'components/image';
import Text from 'components/text';

import styles from './style.scss';

const Card = ({ className, image, onClick, tags, title }) => (
  <div styleName="container" className={className} onClick={onClick}>
    {image && <Image alt={title} className={styles.image} {...image} />}
    <div styleName="content">
      <Text className={styles.title} component="h2" variant="body1">
        {title}
      </Text>
    </div>
    <Divider middle />
    <div styleName="chips">
      {tags.map((tag) => (
        <Chip key={tag} text={tag} />
      ))}
    </div>
  </div>
);

export default Card;
