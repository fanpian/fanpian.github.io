import validate, { Validate } from '../utils/validate';
import { fixed_phone_regexp } from '../utils/RegExpCollection';

/**
 * 验证国内座机
 */
const fixed_phone: Validate = {
  validate: (value: string) => validate(fixed_phone_regexp, value)
};

export default fixed_phone;
