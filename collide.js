"use strict";
exports.__esModule = true;
var util_1 = require("./util");
function default_1(shapeA, shapeB) {
    var direction;
    var queue = [];
    while (true) {
        switch (queue.length) {
            case 0: {
                direction = new util_1.Vec(shapeA.x - shapeB.x, shapeA.y - shapeB.y);
                if (!direction.x && !direction.y)
                    return true;
                break;
            }
            case 1: {
                direction.mul(-1);
                break;
            }
            case 2: {
                var m_1 = queue[0], n_1 = queue[1];
                direction = triple({ x: n_1.x - m_1.x, y: n_1.y - m_1.y }, { x: -m_1.x, y: -m_1.y }, { x: n_1.x - m_1.x, y: n_1.y - m_1.y });
                break;
            }
            case 3: {
                var c = queue[0], b = queue[1], a = queue[2];
                var ao = { x: -a.x, y: -a.y };
                var ab = { x: b.x - a.x, y: b.y - a.y };
                var ac = { x: c.x - a.x, y: c.y - a.y };
                var abp = triple(ac, ab, ab);
                var acp = triple(ab, ac, ac);
                if (util_1.Vec.dot(abp, ao) > 0) {
                    queue.splice(0, 1);
                    direction = abp;
                }
                else if (util_1.Vec.dot(acp, ao) > 0) {
                    queue.splice(1, 1);
                    direction = acp;
                }
                else
                    return true;
                break;
            }
        }
        var _a = support(shapeA, shapeB, direction), m = _a[0], n = _a[1];
        var v = new util_1.Vec(m.x + shapeA.x - n.x - shapeB.x, m.y + shapeA.y - n.y - shapeB.y);
        if (util_1.Vec.dot(direction, v) <= 0)
            return false;
        queue.push(v);
    }
}
exports["default"] = default_1;
function support(shapeA, shapeB, direction) {
    return [
        farthest(shapeA, direction),
        farthest(shapeB, direction)
    ];
}
function triple(v1, v2, v3) {
    var a = new util_1.Vec3(v1.x, v1.y, 0);
    var b = new util_1.Vec3(v2.x, v2.y, 0);
    var c = new util_1.Vec3(v3.x, v3.y, 0);
    var d = util_1.Vec3.cross(a, b);
    var e = util_1.Vec3.cross(d, c);
    return new util_1.Vec(e.x, e.y);
}
function farthest(shape, direction) {
    var r = shape.r;
    if (r != null)
        return direction.clone().normalize().mul(r);
    var vertices = shape.vertices;
    var max = -Infinity;
    var p;
    for (var i = 0; i < vertices.length; i += 2) {
        var v = new util_1.Vec(vertices[i], vertices[i + 1]);
        var d = util_1.Vec.dot(direction, v);
        if (d <= max)
            continue;
        max = d;
        p = v;
    }
    return p;
}
