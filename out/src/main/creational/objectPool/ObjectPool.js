"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectPool = exports.ObjectPool = void 0;
var ObjectPool = /** @class */ (function () {
    function ObjectPool(numberOfSlots, factory) {
        this.numberOfSlots = numberOfSlots;
        this.factory = factory;
        this.acquiredObjectStack = [];
        this.releasedObjectStack = [];
    }
    ObjectPool.prototype.acquire = function () {
        var acquiredObject = null;
        if (this.releasedObjectStack.length > 0) {
            acquiredObject = this.releasedObjectStack.pop();
        }
        else {
            if (this.acquiredObjectStack.length < this.numberOfSlots) {
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
        this.acquiredObjectStack.splice(this.acquiredObjectStack.indexOf(reservedObject), 1);
        this.releasedObjectStack.push(reservedObject);
    };
    ObjectPool.prototype.moveFromReleasedToAcquiredStack = function (releasedObject) {
        this.acquiredObjectStack.push(releasedObject);
        this.releasedObjectStack.splice(this.acquiredObjectStack.indexOf(releasedObject), 1);
    };
    ObjectPool.prototype.createNewObject = function () {
        return this.factory(this.acquiredObjectStack.length + 1);
    };
    return ObjectPool;
}());
exports.ObjectPool = ObjectPool;
function objectPool(numberOfSlots, factory) {
    return new ObjectPool(numberOfSlots, factory);
}
exports.objectPool = objectPool;
//# sourceMappingURL=ObjectPool.js.map