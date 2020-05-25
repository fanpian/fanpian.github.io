import validate, { Validate } from '../utils/validate';
import { id_card_regexp } from '../utils/RegExpCollection';

/**
 * 验证18位身份证号码
 */
const id_card: Validate = {
  validate: (value: string) => validate(id_card_regexp, value)
};

export default id_card;
