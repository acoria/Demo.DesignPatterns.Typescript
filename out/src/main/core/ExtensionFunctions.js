"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.apply = function (block) {
    block(this);
    return this;
};
String.prototype.ifNotEmpty = function (block) {
    if (this != "") {
        block(this);
    }
};
Boolean.prototype.ifTrue = function (block) {
    if (this) {
        block();
    }
};
Boolean.prototype.ifFalse = function (block) {
    if (!this) {
        block();
    }
};
Object.prototype.takeIf = function (predicate) {
    if (predicate(this)) {
        return this;
    }
    else {
        return null;
    }
};
//# sourceMappingURL=ExtensionFunctions.js.map