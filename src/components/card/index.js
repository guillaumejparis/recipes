import { h } from "preact";

import Chip from "components/chip";
import Divider from "components/divider";
import Image from "components/image";
import Text from "components/text";

import styles from "./style.scss";

const Card = ({ className, image, onClick, tags, title }) => (
  <div styleName="container" className={className} onClick={onClick}>
    <div styleName="content">
      <Text color="app-primary" component="h2" variant="body1">
        {tags[0]}
      </Text>
      <div className={styles.titleContainer}>
        <Text className={styles.title} component="h2" variant="body1">
          {title}
        </Text>
      </div>
    </div>
  </div>
);

export default Card;
