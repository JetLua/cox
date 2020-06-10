import {Circle, Polygon} from './shape'
import {Vec, Vec3, IPoint} from './util'

type Shape = Circle | Polygon

export default function(shapeA: Shape, shapeB: Shape): boolean {
  let direction: Vec
  const queue: Vec[] = []

  while (true) {
    switch (queue.length) {
      case 0: {
        direction = new Vec(shapeA.x - shapeB.x, shapeA.y - shapeB.y)
        if (!direction.x && !direction.y) return true
        break
      }

      case 1: {
        direction.mul(-1)
        break
      }

      case 2: {
        const [m, n] = queue
        direction = triple(
          {x: n.x - m.x, y: n.y - m.y},
          {x: -m.x, y: -m.y},
          {x: n.x - m.x, y: n.y - m.y}
        )
        break
      }

      case 3: {
        const [c, b, a] = queue
        const ao = {x: -a.x, y: -a.y}
        const ab = {x: b.x - a.x, y: b.y - a.y}
        const ac = {x: c.x - a.x, y: c.y - a.y}
        const abp = triple(ac, ab, ab)
        const acp = triple(ab, ac, ac)

        if (Vec.dot(abp, ao) > 0) {
          queue.splice(0, 1)
          direction = abp
        } else if (Vec.dot(acp, ao) > 0) {
          queue.splice(1, 1)
          direction = acp
        } else return true

        break
      }
    }

    const [m, n] = support(shapeA, shapeB, direction)
    const v = new Vec(m.x + shapeA.x - n.x - shapeB.x, m.y + shapeA.y - n.y - shapeB.y)
    if (Vec.dot(direction, v) < 0) return false
    queue.push(v)
  }
}

function support(shapeA: Shape, shapeB: Shape, direction: Vec) {
  return [
    farthest(shapeA, direction),
    farthest(shapeB, direction.clone().mul(-1))
  ]
}

function triple(v1: IPoint, v2: IPoint, v3: IPoint) {
  const a = new Vec3(v1.x, v1.y, 0)
  const b = new Vec3(v2.x, v2.y, 0)
  const c = new Vec3(v3.x, v3.y, 0)
  const d = Vec3.cross(a, b)
  const e = Vec3.cross(d, c)
  return new Vec(e.x, e.y)
}

function farthest(shape: Shape, direction: Vec) {
  const {r} = shape as Circle

  if (r != null) return direction.clone().normalize().mul(r)

  const {vertices} = shape as Polygon

  let max = -Infinity
  let p: Vec

  for (let i = 0; i < vertices.length; i+= 2) {
    const v = new Vec(vertices[i], vertices[i + 1])
    const d = Vec.dot(direction, v)

    if (d <= max) continue

    max = d
    p = v
  }

  return p
}
