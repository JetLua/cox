import {IPoint} from './Point'

/**
 * 判断点与有向线段的关系
 * @param p  判断点
 * @param p1  线段起点
 * @param p2  线段终点
 * @return =0: 在线段上 >0: 在线段左侧 <0: 在线段右侧
 */
export function inline(p: IPoint, p1: IPoint, p2: IPoint) {
  return (p2.x - p1.x) * (p.y - p1.y) - (p.x - p1.x) * (p2.y - p1.y)
}
