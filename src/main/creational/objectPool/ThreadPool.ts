type Factory<T> = (identifier: number) => T;

export class ObjectPool<T> {
  private acquiredObjectStack: T[] = [];
  private releasedObjectStack: T[] = [];

  constructor(
    private readonly numberOfSlots: number,
    private readonly creator: Factory<T>
  ) {}

  acquire(): T {
    let acquiredObject: T = null;
    if (this.releasedObjectStack.length > 0) {
      acquiredObject = this.releasedObjectStack.pop();
    } else {
      if (this.acquiredObjectStack.length < this.numberOfSlots) {
        acquiredObject = this.createNewObject();
      } else {
        throw new Error("No more objects available");
      }
    }
    this.moveFromReleasedToAcquiredStack(acquiredObject);
    return acquiredObject;
  }

  release(reservedObject: T) {
    this.acquiredObjectStack.splice(
      this.acquiredObjectStack.indexOf(reservedObject),
      1
    );
    this.releasedObjectStack.push(reservedObject);
  }

  moveFromReleasedToAcquiredStack(releasedObject: T) {
    this.acquiredObjectStack.push(releasedObject);
    this.releasedObjectStack.splice(
      this.acquiredObjectStack.indexOf(releasedObject),
      1
    );
  }

  private createNewObject(): T {
    return this.creator(this.acquiredObjectStack.length + 1);
  }
}

//Test:
export class Thread {
  constructor(readonly identifier: number) {}
}

const threadPool = new ObjectPool<Thread>(3, (identifier: number) => {
  return new Thread(identifier);
});

const thread = threadPool.acquire();
console.log(thread.identifier);
threadPool.release(thread);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
console.log(threadPool.acquire().identifier);
