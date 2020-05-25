import validate, { PhoneValidate, PhoneValidateType } from '../utils/validate';
import {
  sober_phone_regexp,
  loose_phone_regexp,
  most_loose_phone_regexp
} from '../utils/RegExpCollection';

/**
 * 验证18位身份证号码
 */
const phone: PhoneValidate = {
  validate: (value: string, phoneValidateType?: PhoneValidateType) => {
    const phoneTemp = PhoneValidateType.loose;
    const temp = PhoneValidateType[phoneTemp];

    const phoneType = (PhoneValidateType[phoneValidateType || 0] ||
      0) as number;
    if (phoneType === 0) {
      return sober_phone_regexp.test(value);
    } else if (phoneType === 1) {
      return loose_phone_regexp.test(value);
    } else if (phoneType === 2) {
      return most_loose_phone_regexp.test(value);
    }
    return sober_phone_regexp.test(value);
  }
};

export default phone;
