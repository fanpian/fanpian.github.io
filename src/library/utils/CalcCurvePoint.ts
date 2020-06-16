/*
 * @Author: 范翩
 * @Date: 2020-06-09 11:03:29
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-06-16 11:19:05
 * @desc 计算曲线上的所有点
 */

/**
 * 坐标点
 */
export interface Point {
  /**
   * x轴的值
   */
  x: number;

  /**
   * y轴的值
   */
  y: number;
}

/**
 * 计算曲线上所有的点
 */
export default class CalcCurvePoint {
  /**
   * 计算曲线上的所有点
   * @param control_points 曲线上已知的坐标点集合
   * @param k 曲线系数.当k<0或者>1或者不存在时,k=1/6
   */
  static calc(control_points: Point[], k?: number): Point[] {
    if (!k || k < 0 || k > 1) {
      k = 1 / 6;
    }

    const points: Point[] = [];
    let point0: Point = control_points[1];
    let point1: Point = control_points[0];
    let point2: Point = control_points[1];
    let startPoint: Point = control_points[0];
    for (let i = 2; i <= control_points.length; i++) {
      let currentPoint: Point = control_points[i];
      if (!currentPoint) {
        currentPoint = point1;
      }
      // 计算控制点
      const first_point = this.getFirstPoint(point0, point1, point2, k);
      const second_point = this.getSecondPoint(point1, point2, currentPoint, k);
      this.generateBasisCurvePoints(
        startPoint,
        first_point,
        second_point,
        point2,
        points
      );
      // 生成三次贝塞尔曲线上的所有点
      point0 = point1;
      startPoint = point2;
      point1 = point2;
      startPoint = point2;
      point2 = currentPoint;
    }
    return points;
  }

  /**
   * 获取第一个控制点
   */
  private static getFirstPoint(
    point0: Point,
    point1: Point,
    point2: Point,
    k: number
  ): Point {
    const x = point1.x + k * (point2.x - point0.x);
    const y = point1.y + k * (point2.y - point0.y);
    return {
      x: x,
      y: y
    };
  }

  /**
   * 获取第二个控制点
   */
  private static getSecondPoint(
    point1: Point,
    point2: Point,
    currentPoint: Point,
    k: number
  ): Point {
    const x = point2.x + k * (point1.x - currentPoint.x);
    const y = point2.y + k * (point1.y - currentPoint.y);
    return {
      x: x,
      y: y
    };
  }

  /**
   * 生成贝塞尔曲线上的点
   * @param start 开始点
   * @param firstControl 第一个控制点
   * @param secondPoint 第二个控制点
   * @param end 结束点
   */
  private static generateBasisCurvePoints(
    start: Point,
    firstControl: Point,
    secondPoint: Point,
    end: Point,
    points: Point[]
  ) {
    console.log('绘制曲线的坐标点：');
    console.log(
      start.x,
      start.y,
      firstControl.x,
      firstControl.y,
      secondPoint.x,
      secondPoint.y,
      end.x,
      end.y
    );
    const total = end.x - start.x;
    for (let i = 1; i < total; i++) {
      const t = i / total;
      const x = this.getBasisPoint(
        t,
        start.x,
        firstControl.x,
        secondPoint.x,
        end.x
      );
      const y = this.getBasisPoint(
        t,
        start.y,
        firstControl.y,
        secondPoint.y,
        end.y
      );
      points.push({
        x: x,
        y: y
      });
    }
  }

  /**
   * 根据传入的运动时间，获取贝塞尔曲线上此时点的坐标
   * @param t 贝塞尔曲线运行的时间
   * @param point1 开始点的x或者y
   * @param point2 控制点1的x或者y
   * @param point3 控制点2的x或者y
   * @param point4 结束点的x或者y
   */
  static getBasisPoint(
    t: number,
    point1: number,
    point2: number,
    point3: number,
    point4: number
  ) {
    return (
      point1 * (1 - t) * (1 - t) * (1 - t) +
      point2 * 3 * t * (1 - t) * (1 - t) +
      point3 * 3 * t * t * (1 - t) +
      point4 * t * t * t
    );
  }
}
