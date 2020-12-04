export default class {
  private _rotation = 0

  public vertices?: number[]


  get rotation() {
    return this._rotation
  }

  set rotation(v: number) {
    this._rotation = v
  }

  rotate() {
    if (!this.vertices) return

  }
}
