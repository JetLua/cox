export enum Shape {
  Circle,
  Polygon
}

export default abstract class {
  x!: number
  y!: number
  shape!: Shape
  vertices?: number[]
  abstract get area(): number
}
