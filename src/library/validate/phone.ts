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
    const phoneType =
      PhoneValidateType[phoneValidateType || PhoneValidateType.sober];
    if (phoneType === PhoneValidateType[PhoneValidateType.sober]) {
      return sober_phone_regexp.test(value);
    } else if (phoneType === PhoneValidateType[PhoneValidateType.loose]) {
      return loose_phone_regexp.test(value);
    } else if (phoneType === PhoneValidateType[PhoneValidateType.mostLoose]) {
      return most_loose_phone_regexp.test(value);
    }
    return sober_phone_regexp.test(value);
  }
};

export default phone;
