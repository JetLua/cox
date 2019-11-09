export class Vec3 {
  x = 0
  y = 0
  z = 0

  constructor(x = 0, y = 0, z = 0) {
    this.set(x, y, z)
  }

  set(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  cross(v: Vec3) {
    this.set(
      this.y * v.z - v.y * this.z,
      this.z * v.x - v.z * this.x,
      this.x * v.y - v.x * this.y
    )
  }
}