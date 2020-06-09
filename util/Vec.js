"use strict";
exports.__esModule = true;
var sqrt = Math.sqrt;
var Vec = /** @class */ (function () {
    function Vec(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.set(x, y);
    }
    Vec.prototype.set = function (x, y) {
        y = y !== null && y !== void 0 ? y : x;
        this.x = x;
        this.y = y;
    };
    Vec.prototype.clone = function () {
        return new Vec(this.x, this.y);
    };
    Vec.prototype.mul = function (v) {
        this.x *= v;
        this.y *= v;
        return this;
    };
    Vec.prototype.normalize = function () {
        var s = sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        this.x /= s;
        this.y /= s;
        return this;
    };
    Vec.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };
    return Vec;
}());
exports["default"] = Vec;
