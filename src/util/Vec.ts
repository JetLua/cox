import {IPoint} from './Point'

const {sqrt} = Math

export default class Vec implements IPoint {
  public x: number
  public y: number

  constructor(x = 0, y = 0) {
    this.set(x, y)
  }

  set(x: number, y?: number) {
    y = y ?? x
    this.x = x
    this.y = y
  }

  clone() {
    return new Vec(this.x, this.y)
  }

  mul(v: number) {
    this.x *= v
    this.y *= v
    return this
  }

  normalize() {
    const s = sqrt(this.x ** 2 + this.y ** 2)
    this.x /= s
    this.y /= s
    return this
  }

  static dot(v1: IPoint, v2: IPoint) {
    return v1.x * v2.x + v1.y * v2.y
  }
}
