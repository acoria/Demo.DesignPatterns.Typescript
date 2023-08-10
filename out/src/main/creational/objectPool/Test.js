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
var SomeBaseClass = /** @class */ (function () {
    function SomeBaseClass() {
    }
    return SomeBaseClass;
}());
var SomeClass = /** @class */ (function (_super) {
    __extends(SomeClass, _super);
    function SomeClass(something) {
        var _this = _super.call(this) || this;
        _this.something = something;
        return _this;
    }
    return SomeClass;
}(SomeBaseClass));
function testMe(something) {
    var attribute2;
}
var attribute3;
//# sourceMappingURL=Test.js.map