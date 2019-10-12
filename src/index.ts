import arrayToTree from './arrayToTree';
import { toUint8Array } from './base64Library';
import { toBase64 } from './arrayBufferLibrary';
import { CardNo, FixedPhone, IdCard, PhoneValidate } from './validate';

const base64Library = { toUint8Array };
const arrayBufferLibrary = { toBase64 };

export { CardNo, FixedPhone, IdCard, PhoneValidate };

export { arrayToTree, base64Library, arrayBufferLibrary };
