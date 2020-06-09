"use strict";
exports.__esModule = true;
var default_1 = /** @class */ (function () {
    function default_1(_a) {
        var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, vertices = _a.vertices;
        this.x = x;
        this.y = y;
        this.vertices = vertices || [];
    }
    default_1.prototype.setVertices = function (vertices) {
        this.vertices = vertices;
    };
    return default_1;
}());
exports["default"] = default_1;
