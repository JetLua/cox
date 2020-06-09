export default class Vec3 {
  public x: number
  public y: number
  public z: number

  constructor(x = 0, y = 0, z = 0) {
    this.set(x, y, z)
  }

  set(x: number, y?: number, z?:number) {
    y = y ?? x
    z = z ?? x
    this.x = x
    this.y = y
    this.z = z
  }

  clone(): Vec3 {
    return new Vec3(this.x, this.y, this.z)
  }

  static cross(v1: Vec3, v2: Vec3) {
    return new Vec3(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    )
  }
}
