import Point from '../utils/Point'

export default class Circle {
  radius = 0
  rotation = 0
  position = new Point()

  constructor(x = 0, y = 0, radius: number) {
    this.radius = radius
    this.position.set(x, y)
  }
}