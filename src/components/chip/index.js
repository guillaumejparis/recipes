import { h } from 'preact';

import Text from 'components/text';

import styles from './style.scss';

const Chip = ({ text }) => (
  <div styleName="container">
    <Text className={styles.text} color="secondary" variant="body2">
      {text}
    </Text>
  </div>
);

export default Chip;
