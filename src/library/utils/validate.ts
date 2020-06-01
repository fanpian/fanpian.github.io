export interface Validate {
  /**
   * 验证值是否通过;
   * @param value 需要验证的值
   * @returns true:通过;fasel:不通过;
   */
  validate(value: string): boolean;
}

/**
 * 手机号码验证类型
 */
export enum PhoneValidateType {
  /**
   * 中国手机号(严谨), 根据工信部2019年最新公布的手机号段
   */
  sober = 0,

  /**
   * 宽松只要是13,14,15,16,17,18,19开头即可
   */
  loose = 1,

  /**
   * 最宽松只要是1开头即可的手机号码
   */
  mostLoose = 2
}

/**
 * 手机号码验证接口
 */
export interface PhoneValidate {
  /**
   * 验证值是否通过;
   * @param value 需要验证的值
   * @param phoneType 手机号码验证类型
   * @returns true:通过;fasel:不通过;
   */
  validate(value: string, phoneValidateType?: PhoneValidateType): boolean;
}

/**
 * IP验证类型
 */
export enum IpValidateType {
  /**
   * 仅IpV4
   */
  v4 = 0,

  /**
   * 仅IPV6
   */
  v6 = 1,

  /**
   * IPV4或者IPV6
   */
  v4_or_v6 = 2
}

/**
 * IP地址的验证接口
 */
export interface IpValidate {
  /**
   *
   * @param value 需要验证的值
   * @param ipValidateType IP验证类型。0：仅IPV4；1：仅IPV6;2：V4 or V6
   */
  validate(value: string, ipValidateType?: IpValidateType): boolean;
}

/**
 * 使用正则表达式验证字符串
 * @param reg 正则表达式
 * @param value 需要验证的字符串值
 */
const validate = (reg: RegExp, value: string) => {
  return reg.test(value);
};

export default validate;
