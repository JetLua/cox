import {IPoint, Point} from '../util'

export default class {
  public vertices: number[]
  public x: number
  public y: number

  constructor({x = 0, y = 0, vertices}: IOption) {
    this.x = x
    this.y = y
    this.vertices = vertices || []
  }

  setVertices(vertices: number[]) {
    this.vertices = vertices
  }
}

interface IOption {
  x?: number
  y?: number
  vertices?: number[]
}
