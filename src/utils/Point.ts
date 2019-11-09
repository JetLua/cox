export interface IPoint {
  x: number
  y: number
}

export default class Point {
  public x: number
  public y: number


  constructor(x = 0, y = 0) {
    this.set(x, y)
  }

  set(x: number, y?: number) {
    y === undefined ? y = x : 0
    this.x = x
    this.y = y
  }

  copy(point: IPoint) {
    this.x = point.x
    this.y = point.y
  }

  clone() {
    return new Point(this.x, this.y)
  }
}