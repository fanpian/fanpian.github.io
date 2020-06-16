import validate from './library/validate';
import utils from './library/utils';

export { default as utils, Point } from './library/utils';
export { IpValidateType, PhoneValidateType } from './library/utils/validate';
export { default as validate } from './library/validate';

export default {
  validate,
  utils
};
