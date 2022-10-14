import Base, {Shape} from './Base'

export default class extends Base {
  r: number

  constructor({x, y, r} : {x: number, y: number, r: number}) {
    super()
    this.x = x
    this.y = y
    this.r = r
    this.shape = Shape.Circle
  }

  get area(): number {
    return Math.PI * this.r ** 2
  }
}
