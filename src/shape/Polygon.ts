import Base, {Shape} from './Base'

export default class extends Base {
  vertices: number[]

  constructor({x = 0, y = 0, vertices}: {x?: number, y?: number, vertices?: number[]} = {}) {
    super()
    this.x = x
    this.y = y
    this.vertices = vertices || []
    this.shape = Shape.Polygon
  }

  /**
   * 格林公式: https://en.wikipedia.org/wiki/Green's_theorem#Area_calculation
   */
  get area(): number {
    const l = this.vertices.length
    const vertices = [...this.vertices, this.vertices[0], this.vertices[1]]

    let s = 0

    for (let i = 0; i < l; i += 2) {
      s += (vertices[i] + vertices[i + 2]) * (vertices[i + 3] - vertices[i + 1])
    }

    return .5 * Math.abs(s)
  }
}
