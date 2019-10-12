/**
 *  验证国内座机
 * @param value 需要验证的字符串
 */
const validate = (value: string) => {
  return /\d{3}-\d{8}|\d{4}-\d{7}/.test(value);
};

export default {
  validate: validate
};
