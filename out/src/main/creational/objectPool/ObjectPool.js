"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectPool = exports.ObjectPool = void 0;
var ObjectPool = /** @class */ (function () {
    function ObjectPool(numberOfSlots, factory) {
        this.numberOfSlots = numberOfSlots;
        this.factory = factory;
        this.acquired = [];
        this.released = [];
    }
    ObjectPool.prototype.acquire = function () {
        var acquiredObject = null;
        if (this.released.length > 0) {
            acquiredObject = this.released.pop();
        }
        else {
            if (this.acquired.length < this.numberOfSlots) {
                acquiredObject = this.createNewObject();
            }
            else {
                throw new Error("No more objects available");
            }
        }
        this.moveFromReleasedToAcquiredStack(acquiredObject);
        return acquiredObject;
    };
    ObjectPool.prototype.release = function (reservedObject) {
        this.released.push(reservedObject);
        this.acquired.splice(this.acquired.indexOf(reservedObject), 1);
    };
    ObjectPool.prototype.moveFromReleasedToAcquiredStack = function (releasedObject) {
        this.acquired.push(releasedObject);
        this.released.splice(this.acquired.indexOf(releasedObject), 1);
    };
    ObjectPool.prototype.createNewObject = function () {
        return this.factory(this.acquired.length + 1);
    };
    return ObjectPool;
}());
exports.ObjectPool = ObjectPool;
function objectPool(numberOfSlots, factory) {
    return new ObjectPool(numberOfSlots, factory);
}
exports.objectPool = objectPool;
//# sourceMappingURL=ObjectPool.js.map