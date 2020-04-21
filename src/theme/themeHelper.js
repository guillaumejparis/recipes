import { theme } from './theme';

const getSpacing = (multiplier = 2) => multiplier * theme.spacing.default;

export { getSpacing };
