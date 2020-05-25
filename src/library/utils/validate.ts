/**
 * 验证方法
 */
interface ValidateMethod {
  (reg: RegExp, value: string): boolean;
}

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
 * 使用正则表达式验证字符串
 * @param reg 正则表达式
 * @param value 需要验证的字符串值
 */
const validate: ValidateMethod = (reg: RegExp, value: string) => {
  return reg.test(value);
};

export default validate;
