import expect from 'expect.js'
import {collide, Polygon, Circle} from '../dist/cox.es.js'

describe('collide', () => {
  let polygon, circle, square

  before(() => {
    polygon = new Polygon({
      x: 380,
      y: 504,
      vertices: [-60, -60, -120, 0, -60, 60, 60, 60, 120, 0, 60, -60]
    })

    circle = new Circle({
      x: 518,
      y: 656,
      r: 50
    })

    square = new Polygon({
      x: 461,
      y: 575,
      vertices: [-50, -50, 50, -50, 50, 50, -50, 50]
    })
  })

  it('正方形与圆碰撞', () => {
    expect(collide(square, circle)).to.be.ok()
  })

  it('多边形与圆不碰撞', () => {
    expect(collide(polygon, circle)).to.not.be.ok()
  })

  it('多边形与正方形碰撞', () => {
    expect(collide(polygon, square)).to.be.ok()
  })
})

describe('area', () => {
  it('计算正方形面积', () => {
    const square = new Polygon({
      x: 0, y: 0,
      vertices: [0, 0, 10, 0, 10, 10, 0, 10]
    })
    expect(square.area).to.be(100)
  })
})
