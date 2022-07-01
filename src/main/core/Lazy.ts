import { ILazy } from "./ILazy";

class Lazy<T> implements ILazy<T> {
  private _instance: T;
  constructor(private initializer: () => T) {}

  public get instance(): T {
    if (this._instance == null) {
      this._instance = this.initializer();
    }
    return this._instance;
  }
}

export function lazy<T>(initializer: () => T): ILazy<T> {
  return new Lazy<T>(initializer);
}
