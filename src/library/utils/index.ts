import regExps from './RegExpCollection';
import { calcCurvePoint, getBasisPoint } from './CalcCurvePoint';
import arrayToTree from './arrayToTree';
import {
  getParams,
  getParamByName,
  base64ToUint8Array,
  byteArrayToBase64,
  validate
} from './tool';
export { Point } from './CalcCurvePoint';

const utils = {
  regExps,
  arrayToTree,
  getParams,
  getParamByName,
  base64ToUint8Array,
  byteArrayToBase64,
  validate,
  calcCurvePoint,
  getBasisPoint
};

export default utils;
