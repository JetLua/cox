interface IPoint {
  x: number
  y: number
}

class Point implements IPoint {
  public x: number = 0
  public y: number = 0

  constructor(x = 0, y = 0) {
    this.set(x, y)
  }

  set(x: number, y?: number) {
    y = y ?? x
    this.x = x
    this.y = y
    return this
  }
}

export {
  Point,
  IPoint,
}
