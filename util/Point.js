"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.set(x, y);
    }
    Point.prototype.set = function (x, y) {
        y = y !== null && y !== void 0 ? y : x;
        this.x = x;
        this.y = y;
        return this;
    };
    return Point;
}());
exports.Point = Point;
