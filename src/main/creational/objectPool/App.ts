import { objectPool } from "./ObjectPool";
import { Thread } from "./Thread";

const threadPool = objectPool<Thread>(3, (identifier: number) => {
  return new Thread(identifier);
});

const thread = threadPool.acquire();
console.log(thread.identifier);
threadPool.release(thread);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
