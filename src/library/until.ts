import { DynamicIndex } from '@/types';
import arrayToTree from '../arrayToTree';

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
const getParams = (url: string) => {
  if (!url) {
    return {};
  }
  const match = url.match(/([^?=&]+)(=([^&]*))/g) || [];
  return match.reduce((acc, current) => {
    const findIndex = current.indexOf('=');
    const key = current.slice(0, findIndex);
    const val = current.slice(findIndex + 1);
    acc[key] = val;
    return acc;
  }, {} as DynamicIndex);
};

/**
 * 获取指定参数的值
 */
const getParamByName = (url: string, name: string) => {
  if (!name) return null;
  const params = getParams(url);
  return params[name];
};

/**
 * base64转成Uint8Array
 * @param {string} str base64字符串
 * @param {boolean=} [subMark=true] subMark 是否截取base64标志.默认值:true.
 * @returns Uint8Array字节数组.如果source不存在则返回空数组
 */
const base64ToUint8Array = (source: string, subMark = true) => {
  /** source不存在,返回空数组 */
  if (!source) {
    return new Uint8Array(0);
  }
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

/**
 * 将字节数组转成base64字符串
 * @param {ArrayBuffer} source 字节数组
 */
const byteArrayToBase64 = (source: ArrayBuffer) => {
  const bytes = new Uint8Array(source);
  const length = bytes.length;
  let outputStr = '';
  for (let i = 0; i < length; i++) {
    outputStr = String.fromCharCode(bytes[i]);
  }
  return window.btoa(outputStr);
};

const until = {
  arrayToTree,
  getParams,
  getParamByName,
  base64ToUint8Array,
  byteArrayToBase64
};

export default until;
