import { h } from 'preact';

import './style.scss';

const Divider = ({ middle = false }) => (
  <hr styleName={`container ${middle ? 'middle' : ''}`} />
);

export default Divider;
