"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPool = void 0;
var Thread_1 = require("./Thread");
var ObjectPool = /** @class */ (function () {
    function ObjectPool(numberOfSlots, creator) {
        this.numberOfSlots = numberOfSlots;
        this.creator = creator;
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
        return this.creator(this.acquiredObjectStack.length + 1);
    };
    return ObjectPool;
}());
exports.ObjectPool = ObjectPool;
var threadPool = new ObjectPool(3, function (identifier) {
    return new Thread_1.Thread(identifier);
});
var thread = threadPool.acquire();
console.log(thread.identifier);
threadPool.release(thread);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
//# sourceMappingURL=ThreadPool.js.map