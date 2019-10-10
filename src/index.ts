import arrayToTree from './arrayToTree';
import { toUint8Array } from './base64Library';
import { toBase64 } from './arrayBufferLibrary';

const base64Library = { toUint8Array };
const arrayBufferLibrary = { toBase64 };

export default { arrayToTree, base64Library, arrayBufferLibrary };
