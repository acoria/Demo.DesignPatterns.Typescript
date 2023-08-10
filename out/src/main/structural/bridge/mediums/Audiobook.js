"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Medium_1 = require("./Medium");
var Audiobook = /** @class */ (function (_super) {
    __extends(Audiobook, _super);
    function Audiobook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audiobook.prototype.getCover = function () {
        console.log("A beautifully sounding name");
    };
    return Audiobook;
}(Medium_1.default));
exports.default = Audiobook;
//# sourceMappingURL=Audiobook.js.map