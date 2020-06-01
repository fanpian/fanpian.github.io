import { IpValidate, IpValidateType } from '../utils/validate';
import { ip_v4_regexp, ip_v6_regexp } from '../utils/RegExpCollection';

/**
 * IPV4地址验证
 */
const ip_v4: IpValidate = {
  validate: (value: string, ipValidateType?: IpValidateType) => {
    const validateType = IpValidateType[ipValidateType || IpValidateType.v4];
    if (validateType === IpValidateType[IpValidateType.v4]) {
      return ip_v4_regexp.test(value);
    }
    if (validateType === IpValidateType[IpValidateType.v6]) {
      return ip_v6_regexp.test(value);
    }
    return ip_v4_regexp.test(value) || ip_v6_regexp.test(value);
  }
};

export default ip_v4;
