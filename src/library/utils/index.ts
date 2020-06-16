import regExps from './RegExpCollection';
import CalcCurvePoint from './CalcCurvePoint';
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
  /**
   * 计算曲线上的所有点
   * @param control_points 曲线上已知的坐标点集合
   * @param k 曲线系数.当k<0或者>1或者不存在时,k=1/6
   */
  calcCurvePoint: CalcCurvePoint.calc,

  /**
   * 根据传入的运动时间，获取贝塞尔曲线上此时点的坐标
   * @param t 贝塞尔曲线运行的时间
   * @param point1 开始点的x或者y
   * @param point2 控制点1的x或者y
   * @param point3 控制点2的x或者y
   * @param point4 结束点的x或者y
   */
  getBasisPoint: CalcCurvePoint.getBasisPoint
};

export default utils;
