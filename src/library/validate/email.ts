import validate, { Validate } from '../utils/validate';
import { email_regexp } from '../utils/RegExpCollection';

/**
 * 验证18位身份证号码
 */
const email: Validate = {
  validate: (value: string) => validate(email_regexp, value)
};

export default email;
