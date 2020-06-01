import validate, { Validate } from '../utils/validate';
import { mac_regexp } from '../utils/RegExpCollection';

/**
 * 验证18位身份证号码
 */
const mac: Validate = {
  validate: (value: string) => validate(mac_regexp, value)
};

export default mac;
