import {IPoint, Point} from '../util'
import Base from './Base'

export default class extends Base{
  public vertices: number[]
  public x: number
  public y: number

  constructor({x = 0, y = 0, vertices}: {x?: number, y?: number, vertices?: number[]} = {}) {
    super()
    this.x = x
    this.y = y
    this.vertices = vertices || []
  }
}
