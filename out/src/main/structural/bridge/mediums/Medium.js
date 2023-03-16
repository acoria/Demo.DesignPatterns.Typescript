"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medium = /** @class */ (function () {
    function Medium(environment) {
        this.environment = environment;
    }
    Medium.prototype.goToPosition = function (position) {
        this.environment.moveToPosition(position);
    };
    ;
    return Medium;
}());
exports.default = Medium;
//# sourceMappingURL=Medium.js.map