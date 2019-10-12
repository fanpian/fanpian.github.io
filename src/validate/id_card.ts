/**
 *  验证18位身份证号码
 * @param value 需要验证的字符串
 */
const validate = (value: string) => {
  return /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/.test(value);
};

export default {
  validate: validate
};
