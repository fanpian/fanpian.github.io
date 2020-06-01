import validate from './library/validate';
import utils from './library/utils';

export { default as utils } from './library/utils';
export { default as validate } from './library/validate';
export { IpValidateType, PhoneValidateType } from './library/utils/validate';

export default {
  validate,
  utils
};
