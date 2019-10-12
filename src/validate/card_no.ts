/**
 *  银行卡号（10到30位, 覆盖对公/私账户)
 * @param value 需要验证的字符串
 */
const validate = (value: string) => {
  return /^[1-9]\d{9,29}$/.test(value);
};

export default {
  validate: validate
};
