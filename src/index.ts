import arrayToTree from './arrayToTree';
import { toUint8Array } from './base64Library';
import { toBase64 } from './arrayBufferLibrary';
import { CardNo, FixedPhone, IdCard, PhoneValidate } from './validate';

const base64Library = { toUint8Array };
const arrayBufferLibrary = { toBase64 };
const validate = { CardNo, FixedPhone, IdCard, PhoneValidate };

export default { arrayToTree, base64Library, arrayBufferLibrary, validate };
