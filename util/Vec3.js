"use strict";
exports.__esModule = true;
var Vec3 = /** @class */ (function () {
    function Vec3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.set(x, y, z);
    }
    Vec3.prototype.set = function (x, y, z) {
        y = y !== null && y !== void 0 ? y : x;
        z = z !== null && z !== void 0 ? z : x;
        this.x = x;
        this.y = y;
        this.z = z;
    };
    Vec3.prototype.clone = function () {
        return new Vec3(this.x, this.y, this.z);
    };
    Vec3.cross = function (v1, v2) {
        return new Vec3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    };
    return Vec3;
}());
exports["default"] = Vec3;
