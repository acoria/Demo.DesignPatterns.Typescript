"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy = void 0;
var Lazy = /** @class */ (function () {
    function Lazy(initializer) {
        this.initializer = initializer;
    }
    Object.defineProperty(Lazy.prototype, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = this.initializer();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Lazy;
}());
function lazy(initializer) {
    return new Lazy(initializer);
}
exports.lazy = lazy;
//# sourceMappingURL=Lazy.js.map