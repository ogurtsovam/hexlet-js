import { last } from 'lodash';

export default () => {
  const count = (last(['one', 'two']));
  return count;
};
