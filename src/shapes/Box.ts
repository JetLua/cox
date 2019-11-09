import Polygon from './Polygon'

export default class Box extends Polygon {
  public width: number
  public height: number

  constructor(width: number, height: number) {
    const
      hw = width / 2,
      hh = height / 2,
      points = [
        {x: -hw, y: -hh},
        {x: hw, y: -hh},
        {x: hw, y: hh},
        {x: -hw, y: hh}
      ]

    super(points)
    this.width = width
    this.height = height
  }
}