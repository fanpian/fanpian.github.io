/**
 * base64转成Uint8Array
 * @param {string} str base64字符串
 * @param {boolean=} [subMark=true] subMark 是否截取base64标志.默认值:true.
 * @returns { Uint8Array } Uint8Array字节数组
 */
export const base64ToUint8Array = function base64ToUint8Array(
  source: string,
  subMark: boolean = true
): Uint8Array {
  let copy = source;
  /** base64标志 */
  const base64Mark = ';base64,';
  if (subMark) {
    const index = copy.indexOf(base64Mark);
    if (index > -1) {
      copy = copy.substr(index + base64Mark.length);
    }
  }
  const decodeStr = window.atob(copy);
  const outputArray = new Uint8Array(decodeStr.length);
  for (let i = 0; i < decodeStr.length; i++) {
    outputArray[i] = decodeStr.charCodeAt(i);
  }
  return outputArray;
};
