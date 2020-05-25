/**
 * 银行卡号正则表达式（10到30位, 覆盖对公/私账户)
 */
export const card_no_regexp = /^[1-9]\d{9,29}$/;

/**
 * 国内座机号码
 */
export const fixed_phone_regexp = /\d{3}-\d{8}|\d{4}-\d{7}/;

/**
 * 18位身份证号码
 */
export const id_card_regexp = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/;

/**
 * 中国手机号(严谨), 根据工信部2019年最新公布的手机号段
 */
export const sober_phone_regexp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

/**
 * 宽松只要是13,14,15,16,17,18,19开头即可
 */
export const loose_phone_regexp = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

/**
 * 最宽松只要是1开头即可的手机号码
 */
export const most_loose_phone_regexp = /^(?:(?:\+|00)86)?1\d{10}$/;

/**
 * 正则表达式集合
 */
export default {
  /**
   * 银行卡号正则表达式（10到30位, 覆盖对公/私账户)
   */
  card_no: card_no_regexp,

  /**
   * 国内座机号码
   */
  fixed_phone: fixed_phone_regexp,

  /**
   * 18位身份证号码
   */
  id_card: id_card_regexp,

  /**
   * 中国手机号(严谨), 根据工信部2019年最新公布的手机号段
   */
  sober_phone: sober_phone_regexp,

  /**
   * 宽松只要是13,14,15,16,17,18,19开头即可
   */
  loose_phone: loose_phone_regexp,

  /**
   * 最宽松只要是1开头即可的手机号码
   */
  most_loose_phone: most_loose_phone_regexp
};
