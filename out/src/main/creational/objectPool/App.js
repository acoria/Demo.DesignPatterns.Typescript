"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectPool_1 = require("./ObjectPool");
var Thread_1 = require("./Thread");
var threadPool = (0, ObjectPool_1.objectPool)(3, function (identifier) {
    return new Thread_1.Thread(identifier);
});
var thread = threadPool.acquire();
console.log(thread.identifier);
threadPool.release(thread);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
//# sourceMappingURL=App.js.map