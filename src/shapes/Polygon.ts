import Point, {IPoint} from '../utils/Point'

export default class Polygon {
  points: IPoint[]
  position = new Point()
  rotation = 0

  get x() {
    return this.position.x
  }

  get y() {
    return this.position.y
  }

  set y(v) {
    this.position.y = v
  }

  set x(v) {
    this.position.y = v
  }

  constructor(points: IPoint[]) {
    this.points = points
  }
}