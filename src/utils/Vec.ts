import {IPoint} from './Point'

const {sqrt} = Math

export default class Vec {
  public x: number
  public y: number
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x = 0, y = 0) {
    this.set(x, y)
  }

  set(x: number, y?: number) {
    y === undefined ? y = x : 0
    this.x = x
    this.y = y
    return this
  }

  copy(v: IPoint) {
    this.x = v.x
    this.y = v.y
    return this
  }

  clone() {
    return new Vec(this.x, this.y)
  }

  /**
   *
   * @param {Vec} v
   */
  dot(v: IPoint) {
    return this.x * v.x + this.y * v.y
  }

  /**
   * @return {number}
   */
  get size() {
    return sqrt(this.x ** 2 + this.y ** 2)
  }

  mul(v: number) {
    this.x *= v
    this.y *= v
    return this
  }

  normalized() {
    const s = sqrt(this.x ** 2 + this.y ** 2)
    this.x /= s
    this.y /= s
    return this
  }

  /**
   * v1 在 v2 上的投影
   * @param {Vec} v1
   * @param {Vec} v2
   * @return {number}
   */
  static proj(v1: Vec, v2: Vec) {
    return v1.dot(v2) / v2.size
  }
}