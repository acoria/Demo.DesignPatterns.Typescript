type Factory<T> = (identifier: number) => T;

export class ObjectPool<T> {
  private acquired: T[] = [];
  private released: T[] = [];

  constructor(
    private readonly numberOfSlots: number,
    private readonly factory: Factory<T>
  ) {}

  acquire(): T {
    let acquiredObject: T = null;
    if (this.released.length > 0) {
      acquiredObject = this.released.pop();
    } else {
      if (this.acquired.length < this.numberOfSlots) {
        acquiredObject = this.createNewObject();
      } else {
        throw new Error("No more objects available");
      }
    }
    this.moveFromReleasedToAcquiredStack(acquiredObject);
    return acquiredObject;
  }

  release(reservedObject: T) {
    this.released.push(reservedObject);
    this.acquired.splice(
      this.acquired.indexOf(reservedObject),
      1
    );
  }

  moveFromReleasedToAcquiredStack(releasedObject: T) {
    this.acquired.push(releasedObject);
    this.released.splice(
      this.acquired.indexOf(releasedObject),
      1
    );
  }

  private createNewObject(): T {
    return this.factory(this.acquired.length + 1);
  }
}

export function objectPool<T>(
  numberOfSlots: number,
  factory: Factory<T>
): ObjectPool<T> {
  return new ObjectPool(numberOfSlots, factory);
}
