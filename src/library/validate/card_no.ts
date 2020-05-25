import validate, { Validate } from '../utils/validate';
import { card_no_regexp } from '../utils/RegExpCollection';

/**
 * 银行卡号（10到30位, 覆盖对公/私账户)
 */
const card_no: Validate = {
  validate: (value: string) => validate(card_no_regexp, value)
};

export default card_no;
