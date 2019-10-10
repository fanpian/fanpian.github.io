/**
 * 将字节数组转成base64字符串
 * @param {ArrayBuffer} source 字节数组
 */
export const toBase64 = function toBase64(source: ArrayBuffer): string {
  const bytes = new Uint8Array(source);
  const length = bytes.length;
  let outputStr = '';
  for (let i = 0; i < length; i++) {
    outputStr = String.fromCharCode(bytes[i]);
  }
  return window.btoa(outputStr);
};
