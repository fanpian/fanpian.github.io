interface PhoneRegIndex {
  readonly [key: string]: RegExp;
}

/**
 * 手机号验证规则
 */
const phoneReg: PhoneRegIndex = {
  /**
   * 中国手机号(严谨), 根据工信部2019年最新公布的手机号段
   */
  reg: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,

  /**
   * 宽松只要是13,14,15,16,17,18,19开头即可
   */
  looseReg: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,

  /**
   * 最宽松只要是1开头即可的手机号码
   */
  mostLooseReg: /^(?:(?:\+|00)86)?1\d{10}$/
};

/**
 *  验证手机号码字符串
 * @param value 需要验证的字符串
 * @param regExpType 正则表达式类型['reg', 'looseReg', 'mostLooseReg'].默认值：mostLooseReg.
 * @param customRegExp 自定义正则表达式.可选参数
 */
const validate = (
  value: string,
  regExpType = 'mostLooseReg',
  customRegExp?: RegExp
): boolean => {
  if (!['reg', 'looseReg', 'mostLooseReg'].includes(regExpType)) {
    regExpType = 'mostLooseReg';
  }
  return (customRegExp || phoneReg[regExpType]).test(value);
};

export default {
  validate: validate
};
